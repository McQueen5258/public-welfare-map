import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
// import SwipeableViews from 'react-swipeable-views';
import {
  Box,
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  ListItemIcon,
  Link,
  Avatar
} from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
// import Project from "./Bar/Project";
// import { createTheme } from '@material-ui/core/styles';

// * ----------------------------------------------------------------
// const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    maxWidth: '400px',
    height: '100vh'
  },
  topBar: {
    top: '0',
    bottom: 'auto',
    left: '0',
    right: 'auto',
    maxWidth: '400px',
    width: '100vw',
    backgroundColor: 'white'
  },
  tabPanels: {
    margin: '40px 0'
  },
  listItemIcon: {
    '& .MuiListItemIcon-root': {
      minWidth: '37px'
    }
  },
  bottomBar: {
    top: 'auto',
    bottom: 0,
    left: '0',
    right: 'auto',
    backgroundColor: 'white',
    maxWidth: '400px'
  },
  bottomBarItems: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

// * ----------------------------------------------------------------

const AntTabs = styled(Tabs)({});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(() => ({
  textTransform: 'none',
  minWidth: 100
  // [theme.breakpoints.up('sm')]: {
  //   minWidth: 200,
  // },
}));

function ProjectIcon({ url, ...other }) {
  return (
    <SvgIcon {...other}>
      <image xlinkHref={url} height="25" width="25" />
    </SvgIcon>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function Browse({ handleDrawerToggle }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { publicWelfareData: data } = useSelector(
    (state) => state.publicWelfare
  );
  const { ChinaMapData: map } = useSelector((state) => state.ChinaMap);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CATEGORY = ['教育', '环保', '劳工', '科技', '法律', '心理', '社区'];

  const handleClick = (projectId, event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${projectId}`
    );
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
    // handleDrawerToggle();
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const filterProjects = (province, projects, type) => {
    if (type === 'category') {
      return projects.filter(
        ({ attributes }) => attributes?.[type] === province
      );
    } else {
      return projects.filter(
        ({ attributes }) => attributes?.position?.[type] === province
      );
    }
  };
  return (
    <Box className={classes.root}>
      {/* <Button style={{ position: 'fixed' }} onClick={handleDrawerToggle}>
        关闭
      </Button> */}

      <Box>
        <AppBar position="fixed" className={classes.topBar}>
          <AntTabs
            value={value}
            onChange={handleChange}
            centered
            textColor="primary"
            indicatorColor="primary"
            // variant="scrollable"
            scrollButtons="auto"
          >
            <AntTab label="项目" {...a11yProps(0)} />
            <AntTab label="地点" {...a11yProps(1)} />
            <AntTab label="类别" {...a11yProps(2)} />
          </AntTabs>
        </AppBar>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0} className={classes.tabPanels}>
            <List component="nav">
              {data?.map(({ attributes, id }, index) => {
                return (
                  <ListItem
                    key={'ID' + attributes.name + id}
                    button
                    onClick={(event) =>
                      handleClick('ID' + attributes.name + id, event)
                    }
                  >
                    <ListItemIcon className={classes.listItemIcon}>
                      {attributes?.logo?.attributes?.url ? (
                        <ProjectIcon url={attributes?.logo?.attributes?.url} />
                      ) : (
                        <Avatar>{attributes?.name[0]}</Avatar>
                      )}
                    </ListItemIcon>
                    <ListItemText>{attributes?.name}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabPanels}>
            <List component="nav">
              {map?.map(({ properties }, index) => {
                return [...filterProjects(properties?.name, data, 'province')]
                  .length !== 0 ? (
                  <Fragment key={index + properties?.name}>
                    <ListItem component="div">
                      <ListItemText>{properties?.name}</ListItemText>
                    </ListItem>
                    <List component="div" disablePadding>
                      {[
                        ...filterProjects(properties?.name, data, 'province')
                      ]?.map(({ attributes, id }) => {
                        return (
                          <ListItem
                            key={'ID' + attributes.name + id}
                            button
                            onClick={(event) =>
                              handleClick('ID' + attributes.name + id, event)
                            }
                            style={{ paddingLeft: '20px' }}
                          >
                            <ListItemIcon>
                              <ProjectIcon
                                url={attributes?.logo?.attributes?.url}
                              />
                            </ListItemIcon>
                            <ListItemText>{attributes?.name}</ListItemText>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Fragment>
                ) : null;
              })}
            </List>
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.tabPanels}>
            <List component="nav">
              {CATEGORY.map((item, index) => {
                return [...filterProjects(item, data, 'category')].length !==
                  0 ? (
                  <Fragment key={index + item}>
                    <ListItem component="div">
                      <ListItemText>{item}</ListItemText>
                    </ListItem>
                    <List component="div" disablePadding>
                      {[...filterProjects(item, data, 'category')]?.map(
                        ({ attributes, id }) => {
                          return (
                            <ListItem
                              key={'ID' + attributes.name + id}
                              button
                              onClick={(event) =>
                                handleClick('ID' + attributes.name + id, event)
                              }
                              style={{ paddingLeft: '20px' }}
                            >
                              <ListItemIcon>
                                <ProjectIcon
                                  url={attributes?.logo?.attributes?.url}
                                />
                              </ListItemIcon>
                              <ListItemText>{attributes?.name}</ListItemText>
                            </ListItem>
                          );
                        }
                      )}
                    </List>
                  </Fragment>
                ) : null;
              })}
            </List>
          </TabPanel>
        </SwipeableViews>
      </Box>
      <AppBar position="fixed" className={classes.bottomBar}>
        <Toolbar>
          <Box className={classes.bottomBarItems}>
            <Link href="#" color="primary">
              关于这个项目
            </Link>
            <Link href="#" color="primary">
              隐私政策
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Browse;
