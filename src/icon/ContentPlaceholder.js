import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
// import { mix } from '@popmotion/popcorn';
// import './style.css';

// ----------------------------------------------------------------

const theme = createTheme();
const useStyles = makeStyles(() => ({
  contentPlaceholder: {
    maxWidth: '600px',
    /* marginTop: '100px' */
    marginBottom: '200px',
    padding: '20px',
    [theme.breakpoints.down(600)]: {
      // marginLeft: '80px'
    }
  },
  header: {
    height: '50px',
    marginRight: '12px',
    width: '100%',
    marginBottom: '50px',
    [theme.breakpoints.down(600)]: {
      height: '30px'
    }
  },
  word: {
    height: '50px',
    marginRight: '12px',
    height: '18px',
    background: 'gray',
    borderRadius: '10px',
    display: 'inline-block',
    marginBottom: '8px',
    marginRight: '8px',
    background: 'rgb(235, 235, 235)',
    borderRadius: '10px',
    display: 'inline-block',
    [theme.breakpoints.down(600)]: {
      height: '30px',
      height: '14px',
      marginBottom: '5px',
      marginRight: '5px'
    }
  },
  paragraph: {
    marginBottom: '40px',
    [theme.breakpoints.down(600)]: {
      marginBottom: '20px'
    }
  }
}));

// ----------------------------------------------------------------

const randomInt = (min, max) => Math.round(Math.random() * (max - min) + min);
const generateParagraphLength = () => randomInt(10, 40);
const generateWordLength = () => randomInt(20, 100);

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(40)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength);
});

const Word = ({ width }) => {
  const classes = useStyles();

  return <div className={classes.word} style={{ width }} />;
};

const Paragraph = ({ words }) => {
  const classes = useStyles();

  return (
    <div className={classes.paragraph}>
      {words.map((width) => (
        <Word width={width} />
      ))}
    </div>
  );
};

export const ContentPlaceholder = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentPlaceholder}>
      <div className={classes.header}>
        <Word width={75} />
        <Word width={245} />
        <Word width={120} />
      </div>
      {paragraphs.map((words) => (
        <Paragraph words={words} />
      ))}
    </div>
  );
};
