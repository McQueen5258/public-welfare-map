import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import { TitleImage, Title, Text } from './article';

import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    // width: "100%",
    border: '1px solid #eaeaea',
    alignSelf: 'center',
    width: '100%'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  // title: { width: "75%" },
  titleImg: {
    width: '100%'
  },
  paragraphs: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center'
  }
  // paragraph: {
  //   width: "70%",
  //   alignSelf: "center",
  // },
}));

// ---------------------------------------------------------------

function Content({ properties, name }) {
  const classes = useStyles();
  const { article } = properties;

  function ArticleContent(object, index) {
    const { type, content } = object;

    return type === 'title' ? (
      <Title key={index} content={content} />
    ) : (
      <Text key={index} content={content} />
    );
  }

  function ComponentSwitch(object, index) {
    const { type, src, art, typographys } = object;
    return type === 'titlePicture' ? (
      <TitleImage key={index} src={src} alt={art} />
    ) : (
      <Box
        sx={{
          flexGrow: 1,
          p: 10
        }}
        key={index}
      >
        {typographys?.map((object, index) => {
          return ArticleContent(object, index);
        })}
      </Box>
    );
  }
  return (
    <Box className={classes.content} id={name}>
      {article.map((object, index) => {
        return ComponentSwitch(object, index);
      })}
    </Box>
  );
}

export default function Contents() {
  const classes = useStyles();
  const { publicWelfareData: data } = useSelector(
    (state) => state.publicWelfare
  );
  return (
    <div className={classes.root}>
      {data.map(({ properties, name }, index) => {
        return <Content key={index} properties={properties} name={name} />;
      })}
    </div>
  );
}
