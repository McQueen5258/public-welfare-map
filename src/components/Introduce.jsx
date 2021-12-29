import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

// ----------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    height: '300px',
    width: '70%'
  },
  line: {
    borderTop: '1px solid #eaeaea'
  },
  name: {
    height: '70%',
    backgroundSize: '70%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
    // backgroundImage: 'url(Images/Kido/Logo/Kido.png)'
  }
}));

// ----------------------------------------------------------------

export default function Introduce({ data }) {
  const classes = useStyles();
  const { name, position, logo } = data;
  const { city, district } = position;
  const { attributes } = logo;
  return (
    <div className={classes.root}>
      <h1>{city + district}</h1>
      <div className={classes.line}></div>
      <div
        className={classes.name}
        style={{ backgroundImage: `url(${attributes?.url})` }}
      >
        {name}
      </div>
    </div>
  );
}
