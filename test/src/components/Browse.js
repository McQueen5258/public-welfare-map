import React from "react";
import { Box } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    maxWidth: "400px",
  }
}))

function Browse() {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
}

export default Browse;
