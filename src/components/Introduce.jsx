import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Box, Divider, Typography } from '@material-ui/core';

// ----------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '300px',
    width: '100%',
    display: 'flex'
  },
  title: {
    width: '86%'
  },
  logo: {
    height: '100%',
    width: '30%',
    backgroundSize: '80%',
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
  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h5">{name}</Typography>
        {/* <Box className={classes.line}></Box> */}
        <Divider />
        <Typography variant="body1">{city + district}</Typography>
      </Box>
      <Avatar
        style={{ width: 56, height: 56 }}
        src={logo?.attributes?.url ? logo?.attributes?.url : 'image/DPIcon.svg'}
        variant="square"
      ></Avatar>
    </Box>
  );
}
