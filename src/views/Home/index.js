import React, { lazy, Suspense, useEffect } from 'react';
import { Hidden, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getPublicWelfareData } from '../../redux/slices/publicWelfare';
import { getChinaMapData } from '../../redux/slices/ChinaMap';
const Title = lazy(() => import('../../components/Title'));
const Maps = lazy(() => import('../../components/ChinaMap'));
const Sidebar = lazy(() => import('../../components/Sidebar'));
const Content = lazy(() => import('../../components/Contents'));

// ----------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {},
  middlePart: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative'
  }
}));

//----------------------------------------------------------------

function HomeView({ handleDrawerToggle }) {
  const classes = useStyles();
  // const { publicWelfareData } = useSelector((state) => state.publicWelfare);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublicWelfareData());
    dispatch(getChinaMapData());
  }, [dispatch]);

  return (
    <Suspense fallback={<div></div>}>
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
    </Suspense>
  );
}

HomeView.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default HomeView;
