import { Typography } from '@material-ui/core';
import React from 'react';
import { DefaultParagraph } from '../../icon';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

// ----------------------------------------------------------------

const theme = createTheme();
const useStyles = makeStyles(() => ({
  title: {
    fontSize: '3.15em',
    [theme.breakpoints.down(600)]: {
      fontSize: '2.15em'
    }
  },
  paragraph: {
    width: '75%',
    [theme.breakpoints.down(600)]: {
      width: '100%'
    }
  }
}));

// ----------------------------------------------------------------

function Title({ content }) {
  const classes = useStyles();
  return (
    <Typography paragraph variant="h3" className={classes.title}>
      {content}
    </Typography>
  );
}

function Text({ content }) {
  const classes = useStyles();
  return (
    <Typography paragraph className={classes.paragraph} variant="h5">
      {content}
    </Typography>
  );
}

export { Title, Text, DefaultParagraph };
