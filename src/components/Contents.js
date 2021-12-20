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

function Content({ attributes, id, files }) {
  const classes = useStyles();
  const { article } = attributes;

  function ArticleContent(object, index) {
    const { type, content } = object;

    return type === 'title' ? (
      <Title key={index} content={content} />
    ) : (
      <Text key={index} content={content} />
    );
  }

  function ComponentSwitch(object, index) {
    const { type, img, alt, typographys } = object;
    return type === 'titlePicture' ? (
      <TitleImage key={index} img={img} alt={alt} files={files} />
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
    <Box className={classes.content} id={id}>
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
  const { publicWelfareFiles: files } = useSelector((state) => state.files);

  return (
    <div className={classes.root}>
      {data?.map(({ attributes, id }) => {
        return (
          <Content
            key={'ID' + attributes.name + id}
            id={'ID' + attributes.name + id}
            attributes={attributes}
            files={files}
          />
        );
      })}
    </div>
  );
}
