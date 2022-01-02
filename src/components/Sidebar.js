import React, { Fragment, lazy, Suspense } from 'react';
// import { useWindowScroll } from 'react-use';
import { Box, Button, Link, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Introduce from './Introduce';
import { China, Browse } from '../icon';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import Loading from './Loading';
// const Introduce = lazy(() => import('./Introduce'));
// const { China, Browse } = lazy(() => import('../icon'));

// ----------------------------------------------------------------
const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    width: '40%',
    maxWidth: '400px',
    border: '1px solid #eaeaea',
    borderRight: '0',
    position: 'sticky',
    top: '0'
  },
  item: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  Bar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: theme.spacing(5)
    // position: "relative",
    // top: "30px"
  },
  more: {
    width: '70%',
    height: '100px'
  }
}));

// ----------------------------------------------------------------

function More({ more }) {
  return (
    <Fragment>
      <Typography variant="body2">更多链接</Typography>
      {more?.map(({ href, content }, index) => (
        <Link
          key={index}
          rel="noopener"
          href={href}
          variant="subtitle1"
          target="_blank"
        >
          {content}
        </Link>
      ))}
    </Fragment>
  );
}

function Item({ handleDrawerToggle, attributes, id }) {
  const classes = useStyles();

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

  return (
    <Box className={classes.item} data-aos="fade" data-aos-anchor={`#${id}`}>
      <div className={classes.Bar}>
        <Button
          color="inherit"
          startIcon={<Browse />}
          onClick={() => handleDrawerToggle()}
        >
          浏览
        </Button>
        <Button color="inherit" startIcon={<China />} onClick={handleClick}>
          地图
        </Button>
      </div>
      <Introduce data={attributes} />
      <Box className={classes.more}>
        {attributes?.more.length !== 0 && <More more={attributes?.more} />}
      </Box>
    </Box>
  );
}

export default function Sidebar({ handleDrawerToggle }) {
  const classes = useStyles();
  const { publicWelfareData: data } = useSelector(
    (state) => state.publicWelfare
  );
  return (
    // <Suspense fallback={<Loading />}>
      <Box className={classes.root}>
        {data?.map(({ attributes, id }) => {
          return (
            <Item
              id={'ID' + attributes.name + id}
              key={attributes.name + id}
              attributes={attributes}
              handleDrawerToggle={() => handleDrawerToggle()}
            />
          );
        })}
      </Box>
    // </Suspense>
  );
}
