import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "300px",
    width: "70%;",
  },
  line: {
    width: "300px",
    borderTop: "1px solid #eaeaea",
  },
  name: {
    height: "70%",
    backgroundSize: "70%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(Images/Kido/Logo/Kido.png)",
  },
}));

export default function Introduce() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>广州市海珠区</h1>
      <div className={classes.line}></div>
      <div className={classes.name}>
        蝌蚪实务学堂
      </div>
    </div>
  );
}
