import React from 'react';
import { makeStyles } from '@material-ui/styles';

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

export default function Introduce({ name, properties }) {
  const classes = useStyles();
  const { city, district } = properties.position;
  return (
    <div className={classes.root}>
      <h1>{city + district}</h1>
      <div className={classes.line}></div>
      <div
        className={classes.name}
        style={{ backgroundImage: `url(${properties.logo})` }}
      >
        {name}
      </div>
    </div>
  );
}
