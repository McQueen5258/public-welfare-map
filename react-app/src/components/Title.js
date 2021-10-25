import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingTop: "6.5612792969em",
    paddingBottom: "1.1008em",
  },
  title: {
    fontFamily: "Nocturno Display",
    fontSize: "5.2490234375em",
    letterSpacing: "-.03em",
    paddingTop: ".07em",
    lineHeight: "1.25",
    margin: ".5636096em 0",
    /* fontWeight: '400' */
  },
  subtitle: {
    fontFamily: "Nocturno Display",
    fontSize: ".88064em",
    width: "29.1579559669em",
    maxWidth: "calc(100vw - 8.39844em)",
    lineHeight: "1.72em",
    margin: "1.376em auto"
  },
  aboutNav: {
    margin: "2.15em auto",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "20.0234353542em",
    maxWidth: "100%",
    transition: "width .3s ease",
    borderTop: "1px solid #eaeaea",
    paddingTop: "1.1008em",
  },
  aboutA: {
    fontWeight: "500",
    fontSize: ".704512em",
    /* color: "#565f62", */
    letterSpacing: ".2em",
    textAlign: "center",
    textTransform: "uppercase",
  }
}));

function Title() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Typography variant="h1" className={classes.title}>To Serve Better</Typography>
      <Typography className={classes.subtitle}>
        Stories of people committed to public purpose and to making a positive
        difference in communities throughout the country.
      </Typography>
      <nav className={classes.aboutNav}>
        <a className={classes.aboutA} href="">ABOUT THE PROJECT</a>
      </nav>
    </header>
  );
}

export default Title;
