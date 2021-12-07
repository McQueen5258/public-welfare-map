import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';

// ----------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  title: {},
  paragraph: {width: '75%'}
}));

// ----------------------------------------------------------------

function Title({ content }) {
  const classes = useStyles();
  return (
    <Typography paragraph variant="h4" className={classes.title}>
      {content}
    </Typography>
  );
}

function Text({ content }) {
  const classes = useStyles();
  return (
    <Typography paragraph className={classes.paragraph}>
      {content}
    </Typography>
  );
}

export { Title, Text };
