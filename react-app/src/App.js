import { lazy, Suspense, useState, useEffect } from 'react';
import { Drawer } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
const Bar = lazy(() => import('./components/Bar'));
const Browse = lazy(() => import('./components/Browse'));
const HomeView = lazy(() => import('./views/Home/index'));

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
      duration: 0,
      easing: 'ease-out-back'
      // delay: 600,
    });
  }, []);

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
          <Browse />
        </Drawer>
        <HomeView handleDrawerToggle={handleDrawerToggle}/>
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
