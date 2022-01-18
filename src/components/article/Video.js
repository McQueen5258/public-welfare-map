import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

// ----------------------------------------------------------------

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    width: '75%',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down(600)]: {
      width: '100%'
    }
  }
}));

// ----------------------------------------------------------------

const Video = ({ title, video, alt, isLink }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <video controls src={video} alt={alt} width="100%">
        您的浏览器不支持 video 标签。
      </video>
      {/* <ReactPlayer controls url={video} width="100%" /> */}
      <Typography variant="subtitle2">{alt}</Typography>
    </Box>
  );
};

export { Video };
