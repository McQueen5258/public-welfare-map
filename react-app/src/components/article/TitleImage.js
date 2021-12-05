import React from 'react';
import { makeStyles } from '@material-ui/styles';

// ----------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  titleImg: {
    width: '100%'
  }
}));

const TitleImage = ({ src }) => {
  const classes = useStyles();
  return <img className={classes.titleImg} src={src} alt="" />;
};

export default TitleImage;
