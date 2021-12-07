import React from "react";
import {
  Hidden,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
} from "@material-ui/core";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {},
//   Box: {
//     display: "flex",
//     width: "100%",
//     height: "100%",
//   },
// }));

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function HideOnScroll(props) {
  const { children, window } = props;
  const media = {
    computer: useMediaQuery("(min-width:1200px)"),
    laptop: useMediaQuery("(min-width:800px)"),
    iPad: useMediaQuery("(min-width:500px)"),
    phone: 600,
  };
  const { computer, laptop, iPad, phone } = media;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: computer ? 1300 : laptop ? 1200 : iPad ? 900 : phone,
  });
  return (
    <Slide appear={false} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

function Bar({ handleDrawerToggle }) {
  // const classes = useStyles();
  return (
    <HideOnScroll>
      <AppBar color="inherit">
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Public Welfare1
          </Typography>
          <Hidden mdUp>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              style={{ ml: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Bar;
