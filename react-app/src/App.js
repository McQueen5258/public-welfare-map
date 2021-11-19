import { lazy, Suspense, useState, useRef, useEffect } from "react";
import { Hidden, Drawer, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
const Bar = lazy(() => import("./components/Bar"));
const Browse = lazy(() => import("./components/Browse"));
const Title = lazy(() => import("./components/Title"));
const Maps = lazy(() => import("./components/ChinaMap"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Content = lazy(() => import("./components/Contents"));

const useStyles = makeStyles((theme) => ({
  root: {},
  middlePart: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    /* grid-template-columns: 1fr 3fr; */
  },
}));

function App(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [content, setContent] = useState(useRef());

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // useEffect(() => {
  //   if (content !== undefined) {
  //     const scrollSpy = new bootstrap.ScrollSpy(content.current, {
  //       target: "#navbar-example",
  //     });
  //     console.log("scrollSpy: ", scrollSpy);
  //     console.log("1: ", 1);
  //   }
  // }, [content]);

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Bar handleDrawerToggle={handleDrawerToggle} />
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {/* div */}
          <Browse />
        </Drawer>
        <Title />
        <Maps />
        <Box
          ref={content}
          className={classes.middlePart}
          data-bs-spy="scroll"
          data-bs-target="#navbar-example"
        >
          <Hidden mdDown>
            <Sidebar
              id="navbar-example"
              content={content}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Hidden>
          <Content />
        </Box>
      </Suspense>
    </div>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;
