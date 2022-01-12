import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

// ----------------------------------------------------------------

const theme = createTheme();
const useStyles = makeStyles(() => ({
  title: {
    fontSize: '2.15em',
    [theme.breakpoints.down(600)]: {
      fontSize: '1.15em',
    }
  },
  paragraph: { width: '75%' }
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
