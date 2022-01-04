import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { DefaultContentPicture } from '../../icon';

// ----------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  titleImg: {
    width: '100%'
  }
}));

// ----------------------------------------------------------------

const TitleImage = ({ img, files, alt }) => {
  const classes = useStyles();

  const result = files?.find(({ id }) => id === img?.id)?.attributes?.url;

  return result ? (
    <img className={classes.titleImg} src={result ? result : ''} alt={alt} />
  ) : (
    <DefaultContentPicture />
  );
};

export default TitleImage;
