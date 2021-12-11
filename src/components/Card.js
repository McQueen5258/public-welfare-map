import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '400px',
    height: '130px',
    backgroundColor: 'white',
    boxShadow: '0 10px 25px rgba(92, 99, 105, .2)',
    display: 'flex',
    flexDirection: 'row',
    userSelect: 'none',
    transition: 'all 1s'
  },
  cardContent: {
    height: '100%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px'
  },
  cardImg: {
    height: '100%',
    width: '30%',
    // backgroundImage: "url(Images/Kido/Logo/Kido.png)",
    backgroundSize: '70%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  text: {
    margin: '0'
  },
  founder: {
    color: 'rgb(165, 36, 56)'
  },
  placeName: {
    color: 'rgb(87, 91, 102)'
  }
}));

function Card({ card }, ref) {
  const classes = useStyles();
  const { founder, position, vision, titleLogo } = card.properties;
  const { province, city } = position;
  return (
    <foreignObject>
      <Fade in={card.visibility} timeout={1000}>
        <div
          ref={ref}
          className={classes.root}
          style={{
            top: card.top + 'px',
            left: card.left + 'px',
            transition: 'all 1s'
          }}
        >
          <div className={classes.cardContent}>
            <Typography variant="subtitle1" className={classes.text}>
              {vision}
            </Typography>
            <Typography variant="subtitle2" className={classes.text}>
              <span className={classes.founder}>{founder}</span>
              <span className={classes.placeName}>
                , {province}
                {city}
              </span>
            </Typography>
          </div>
          <div
            className={classes.cardImg}
            style={{ backgroundImage: 'url(' + titleLogo + ')' }}
          ></div>
        </div>
      </Fade>
    </foreignObject>
  );
}

export default forwardRef(Card);
