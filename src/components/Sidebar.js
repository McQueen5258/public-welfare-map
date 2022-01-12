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
    height: 'calc(100% - 120px)',
    width: 'calc(100% - 100px)',
    margin: '70px 50px 50px',
    position: 'relative'
  },
  items: {
    width: '100%',
    position: 'absolute',
    top: '50px',
    bottom: '0px',
    left: '0px'
  },
  item: {
    width: '100%',
    height: 'calc(100% - 25px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: '25px auto 0',
    position: 'absolute'
  },
  Bar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
    // marginTop: theme.spacing(5)
    // position: "relative",
    // top: "30px"
  },
  more: {
    width: '100%',
    minHeight: '100px'
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

// ----------------------------------------------------------------

function More({ more, contact }) {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="body2">联系方式</Typography>
      {/* {more?.map(({ href, content }, index) => (
        <Link
          key={index}
          rel="noopener"
          href={href}
          variant="subtitle1"
          target="_blank"
        >
          {content}
        </Link>
      ))} */}
      {Object.keys(contact).map((key, index) => {
        return (
          <Box className={classes.contactItem} key={key + index}>
            <Typography>{key}:&nbsp;</Typography>
            <Link href={''} variant="subtitle1" target="_blank">
              {contact[key]}
            </Link>
          </Box>
        );
      })}
    </Fragment>
  );
}

function Item({ attributes, id }) {
  const classes = useStyles();

  return (
    <Box className={classes.item} data-aos="fade" data-aos-anchor={`#${id}`}>
      <Introduce data={attributes} />
      <Box className={classes.more}>
        {Object.keys(attributes?.contact)?.length !== 0 && (
          <More more={attributes?.more} contact={attributes.contact} />
        )}
      </Box>
    </Box>
  );
}

export default function Sidebar({ handleDrawerToggle, backToMap }) {
  const classes = useStyles();
  const { publicWelfareData: data } = useSelector(
    (state) => state.publicWelfare
  );

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
    // <Suspense fallback={<Loading />}>
    <Box
      style={{
        height: '100vh',
        width: '40%',
        maxWidth: '400px',
        border: '1px solid #eaeaea',
        borderRight: '0',
        position: 'sticky',
        top: '0'
      }}
    >
      <Box className={classes.root}>
        <Box className={classes.Bar}>
          <Button
            color="inherit"
            startIcon={<Browse />}
            onClick={() => handleDrawerToggle()}
          >
            浏览
          </Button>
          <Button color="inherit" startIcon={<China />} onClick={backToMap}>
            地图
          </Button>
        </Box>
        <Box className={classes.items}>
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
      </Box>
    </Box>
    // </Suspense>
  );
}
