import { lazy, Suspense, useState } from "react";
import { Hidden, Drawer, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const Bar = lazy(() => import("./components/Bar"));
const Browse = lazy(() => import("./components/Browse"));
const Title = lazy(() => import("./components/Title"));
const Maps = lazy(() => import("./components/ChinaMap"));

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
      </Suspense>
    </div>
  );
}

export default App;
