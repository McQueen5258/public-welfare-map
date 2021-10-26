import { lazy, Suspense, useState } from "react";
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
    /* grid-template-columns: 1fr 3fr; */
  },
}));

function App(props) {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
          <Browse />
        </Drawer>
        <Title />
        <Maps />
        <Box className={classes.middlePart}>
          <Hidden mdDown>
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
