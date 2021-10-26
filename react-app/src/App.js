import { lazy, Suspense, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, Drawer, Box } from "@material-ui/core";
import PropTypes from "prop-types";
const Bar = lazy(() => import("./components/Bar"));
const Maps = lazy(() => import("./components/ChinaMap"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Content = lazy(() => import("./components/Contents"));
const Title = lazy(() => import("./components/Title"));
const Browse = lazy(() => import("./components/Browse"));
/*
 * // TODO
 */
const useStyles = makeStyles((theme) => ({
  root: {},
  middlePart: {
    display: "flex",
    flexDirection: "row",
    /* grid-template-columns: 1fr 3fr; */
  },
}));

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      {/* // TODO 后续可以考虑添加加载页面*/}
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
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        >
          <Browse />
        </Drawer>
        <Title />
        <Maps />
        <Box className={classes.middlePart}>
          <Hidden smDown>
            <Sidebar handleDrawerToggle={handleDrawerToggle} />
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
