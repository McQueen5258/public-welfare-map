import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {
  Box,
  AppBar,
  Tabs,
  Button,
  Tab,
  Typography,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
  ListItemIcon
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
// import Project from "./Bar/Project";

// * ----------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    maxWidth: '400px',
    height: '100vh',
    position: 'relative'
  }
}));

// * ----------------------------------------------------------------

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
  const theme = useStyles();
  const [value, setValue] = useState(0);
  const { publicWelfareData: data } = useSelector(
    (state) => state.publicWelfare
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
  return (
    <Box className={classes.root}>
      {/* <Button style={{ position: 'fixed' }} onClick={handleDrawerToggle}>
        关闭
      </Button> */}

      <Box sx={{ bgcolor: 'background.paper', width: 400 }}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label="项目" {...a11yProps(0)} />
            <Tab label="地点" {...a11yProps(1)} />
            <Tab label="目的" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'white'
            }}
            component="nav"
          >
            {data.map(({ name, properties }) => {
              return (
                <ListItem button onClick={(event) => handleClick(name, event)}>
                  <ListItemIcon>
                    <ProjectIcon url={properties.logo} />
                  </ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </ListItem>
              );
            })}
          </List>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          <List component="nav">
            <ListItem button>
              <ListItemText>Empower</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>Create</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>Respond</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>Improve</ListItemText>
            </ListItem>
          </List>
        </TabPanel>
      </Box>
      {/* <Box
        style={{
          position: 'fixed',
          height: '60px',
          width: '100%',
          maxWidth: '400px',
          bottom: 0
        }}
      ></Box> */}
    </Box>
  );
}

export default Browse;
