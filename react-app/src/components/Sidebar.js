import React, { useState, useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
import { Box, Button } from "@material-ui/core";
import Introduce from "./Introduce";
import { China, Browse } from "../icon";
import { makeStyles } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
const theme = createTheme();

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    width: "40%",
    maxWidth: "400px",
    border: "1px solid #eaeaea",
    borderRight: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
  },
  rootDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginTop: theme.spacing(5)
    // position: "relative",
    // top: "30px"
  },
}));

export default function Sidebar({ handleDrawerToggle, content }) {
  const { y: pageYOffset } = useWindowScroll();
  const [isFixed, setIsFixed] = useState(
    content.current.offsetTop <= pageYOffset
  );
  const classes = useStyles(); 
  // const sideBar = useRef();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#map"
    );
    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Box className={classes.root}>
      <div className={classes.rootDiv}>
        <Button
          color="inherit"
          startIcon={<Browse />}
          onClick={handleDrawerToggle}
        >
          浏览
        </Button>
        <Button color="inherit" startIcon={<China />} onClick={handleClick}>
          地图
        </Button>
      </div>
      <Introduce />
      <div>链接</div>
    </Box>
  );
}
