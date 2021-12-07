import { lazy, Suspense, useState, useEffect } from 'react';
import { Box, Drawer, Hidden } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
import { getPublicWelfareData } from './redux/slices/publicWelfare';
import { getChinaMapData } from './redux/slices/ChinaMap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
const Bar = lazy(() => import('./components/Bar'));
const Browse = lazy(() => import('./components/Browse'));
// const HomeView = lazy(() => import('./views/Home/index'));
const Title = lazy(() => import('./components/Title'));
const Maps = lazy(() => import('./components/ChinaMap'));
const Sidebar = lazy(() => import('./components/Sidebar'));
const Content = lazy(() => import('./components/Contents'));

// ----------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {},
  middlePart: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative'
  }
}));

// ----------------------------------------------------------------
function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  useEffect(() => {
    AOS.init({
      duration: 1500
      // easing: 'ease-out-back',
      // delay: 600,
      // disable: 'phone'
      // throttleDelay: -999
    });
  });

  const classes = useStyles();
  // const { publicWelfareData } = useSelector((state) => state.publicWelfare);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublicWelfareData());
    dispatch(getChinaMapData());
  }, [dispatch]);

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
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <Browse handleDrawerToggle={handleDrawerToggle} />
        </Drawer>

        <Box>
          <Title />
          <Maps />
          <Box
            className={classes.middlePart}
            data-bs-spy="scroll"
            data-bs-target="#navbar-example"
          >
            <Hidden smDown>
              <Sidebar
                id="navbar-example"
                handleDrawerToggle={() => handleDrawerToggle()}
              />
            </Hidden>
            <Content />
          </Box>
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
  window: PropTypes.func
};

export default App;
