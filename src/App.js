import { lazy, Suspense, useState, useEffect } from 'react';
import { Drawer } from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import AV from 'leancloud-storage';
import Loading from './components/Loading';
const Bar = lazy(() => import('./components/Bar'));
const Browse = lazy(() => import('./components/Browse'));
const HomeView = lazy(() => import('./views/Home/index'));
AV.init({
  appId: 'AiJfkv2nVc6dvnXvjjXWDL0n-MdYXbMMI',
  appKey: 'Q5wrdmIUGYjU6swssUurdMxW',
  serverURL: 'https://aijfkv2n.api.lncldglobal.com'
});

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#map'
    );
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
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

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Bar handleDrawerToggle={handleDrawerToggle} backToMap={handleClick} />
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
        <HomeView handleDrawerToggle={handleDrawerToggle} backToMap={handleClick} />
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
