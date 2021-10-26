import React from "react";
import { Box, Button } from "@material-ui/core";
import Introduce from "./Introduce";
import { China, Browse } from "../icon";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
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
  },
  rootDiv: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
}));

export default function Sidebar({ handleDrawerToggle }) {
  const classes = useStyles();
  // useEffect(() => {
  //   if (document.documentElement.scrollTop) {
  //   }
  // }, [document.documentElement.scrollTop]);
  // function getTop(e) {
  //   var offset = e.offsetTop;
  //   if (e.offsetParent != null) offset += getTop(e.offsetParent);
  //   return offset;
  // }

  // function getLeft(e) {
  //   var offset = e.offsetLeft;
  //   if (e.offsetParent != null) offset += getLeft(e.offsetParent);
  //   return offset;
  // }

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
        <Button startIcon={<Browse />} onClick={handleDrawerToggle}>浏览</Button>
        <Button startIcon={<China />} onClick={handleClick}>地图</Button>
      </div>
      <Introduce />
      <div>链接</div>
    </Box>
  );
}
