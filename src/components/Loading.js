import React from 'react';
import { makeStyles, styled } from '@material-ui/styles';

// -------------------------------------------------------------
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'conic-gradient(#0000 10%,#1296db)',
    '-webkit-mask':
      'radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0)',
    animation: '$s3 1s infinite linear'
  },
  '@keyframes s3': {
    to: { transform: 'rotate(1turn)' }
  }
}));
// -------------------------------------------------------------

function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.loading}></div>
    </div>
  );
}

export default Loading;
