import { lazy, Suspense } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
const Maps = lazy(() => import("./components/ChinaMap"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const Content = lazy(() => import("./components/Contents"));
const Title = lazy(() => import("./components/Title"));
/*
* // TODO 
*/
const useStyles = makeStyles((theme) => ({
  root: {},
  middlePart: {
    display: 'flex',
    flexDirection: 'row'
    /* grid-template-columns: 1fr 3fr; */
  }
}));


function App() {
  const classes = useStyles();
  return (
    <div>
      {/* // TODO 后续可以考虑添加加载页面*/}
      <Suspense fallback={<div></div>}>
        <Title />
        <Maps />
        <article className={classes.middlePart}>
          <Sidebar />
          <Content />
        </article>
      </Suspense>
    </div>
  );
}

export default App;
