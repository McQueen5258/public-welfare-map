import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { DefaultContentPicture } from '../../icon';
import { Box, Typography } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

// ----------------------------------------------------------------

const theme = createTheme();
const useStyles = makeStyles(() => ({
  rootTitleImg: {
    // marginBottom: theme.spacing(5)
  },
  titleImg: {
    width: '100%'
  },
  rootImg: {
    marginBottom: theme.spacing(5),
    width: '75%',
    [theme.breakpoints.down(600)]: {
      width: '100%'
    }
  },
  img: {
    width: '100%'
  },
  art: {
    color: 'grey'
  }
}));

// ----------------------------------------------------------------

const TitleImage = ({ img, files, alt, isLink }) => {
  const classes = useStyles();
  const result = !isLink
    ? files?.find(({ id }) => id === img?.id)?.attributes?.url
    : img;

  return result ? (
    <Box className={classes.rootTitleImg}>
      <img className={classes.titleImg} src={result ? result : ''} alt={alt} />
      <Typography variant="subtitle2" className={classes.art}>
        {alt}
      </Typography>
    </Box>
  ) : (
    <DefaultContentPicture />
  );
};

const Image = ({ img, files, alt, isLink }) => {
  const classes = useStyles();
  const result = !isLink
    ? files?.find(({ id }) => id === img?.id)?.attributes?.url
    : img;

  return result ? (
    <Box className={classes.rootImg}>
      <img className={classes.img} src={result ? result : ''} alt={alt} />
      <Typography variant="subtitle2" className={classes.art}>
        {alt}
      </Typography>
    </Box>
  ) : (
    <DefaultContentPicture />
  );
};

export { TitleImage, Image };
