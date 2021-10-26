import { lazy, Suspense, useState } from "react";
import { Hidden, Drawer, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const Bar = lazy(() => import("./components/Bar"));

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

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Bar handleDrawerToggle={handleDrawerToggle} />
        <div style={{
          height: '600vh'
        }}></div>
      </Suspense>
    </div>
  );
}

export default App;
