import React from "react";
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
