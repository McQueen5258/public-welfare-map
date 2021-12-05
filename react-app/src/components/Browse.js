import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import {
  Box,
  AppBar,
  Tabs,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// import Project from "./Bar/Project";

// * ----------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    maxWidth: "400px",
  },
}));

// * ----------------------------------------------------------------
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Browse() {
  const classes = useStyles();
  const theme = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box className={classes.root}>
      <Button>关闭</Button>
      <AppBar
        position="static"
        sx={{
          width: "100%",
          maxWidth: "880px",
          bgcolor: "background.paper",
          justifyContent: "center",
        }}
      >
        <Tabs
          // variant="fullWidth"
          value={value}
          onChange={() => handleChange()}
          // indicatorColor="secondary"
          // textColor="inherit"
          // variant="scrollable"
          // aria-label="scrollable auto tabs example"
          // scrollButtons="auto"
        >
          {/* <Tab label="公益项目" {...a11yProps(0)} />
          <Tab label="地点" {...a11yProps(1)} />
          <Tab label="Purpose" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={() =>handleChangeIndex()}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Box>
            {/* <List>
              {places.map(({ name, properties }, index) => (
                <Project key={index} name={name} properties={properties} />
              ))}
            </List> */}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

export default Browse;
