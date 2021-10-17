import React, { useState, useEffect } from "react";
import Introduce from "./Introduce";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
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

export default function Sidebar() {
  const classes = useStyles();
  const [onTheWindow, setOnTheWindow] = useStyles(false);

  useEffect(() => {
    if (document.documentElement.scrollTop) {
      
    }
  },[document.documentElement.scrollTop])
  function getTop(e) {
    var offset = e.offsetTop;
    if (e.offsetParent != null) offset += getTop(e.offsetParent);
    return offset;
  }

  function getLeft(e) {
    var offset = e.offsetLeft;
    if (e.offsetParent != null) offset += getLeft(e.offsetParent);
    return offset;
  }

  return (
    <aside className={classes.root}>
      <div className={classes.rootDiv}>
        <div>浏览</div>
        <div>地图</div>
      </div>
      <Introduce />
      <div>链接</div>
    </aside>
  );
}
