import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Box, Divider, Typography } from '@material-ui/core';
import { TitleImage, Title, Text } from './article';
import { makeStyles } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

// --------------------------------------------------------------

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    // width: "100%",
    border: '1px solid #eaeaea',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  vision: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down(600)]: {
      fontSize: '16px'
    }
  },
  divider: { marginTop: theme.spacing(1), width: '40%' },
  article: { marginTop: theme.spacing(3) },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.up(600)]: {
      width: '70%'
    }
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

function Item({ object, index, files }) {
  const { type, img, alt, content } = object;
  if (type == 'titlePicture') {
    return <TitleImage key={index} img={img} alt={alt} files={files} />;
  } else if (type == 'title') {
    return <Title key={index} content={content} />;
  } else if (type == 'text') {
    return <Text key={index} content={content} />;
  }
}

function Content({ attributes, id, files }) {
  const classes = useStyles();
  const { article, vision } = attributes;
  const ARTICLE = [
    {
      type: 'titlePicture',
      img: {
        __type: 'Pointer',
        className: '_File',
        id: '61bd754c5fc1f86faec762bf'
      },
      alt: ''
    },
    {
      type: 'title',
      content:
        '"使命和愿景是：探索青少年职业发展新路径，为好的社会培养“珍贵的普通人”。"'
    },
    {
      type: 'text',
      content:
        '实务学堂是一个面向 16-18 岁农民（工）子女的非学历职业教育公益项目，2018 年3月创立于北京，2020年迁址广州市海珠区小洲村。'
    },
    {
      type: 'text',
      content:
        '创办三年多，受到了广泛的社会关注，得到各界的肯定与资助，并开始向社会输出毕业生或在校实习生，积累了良好的口碑和社会影响力。'
    },
    {
      type: 'text',
      content:
        '未来 2-3 年，实务学堂计划每年招收 20-30 名学生。2021 年秋季招生已经启动，欢迎咨询。'
    }
  ];

  return (
    <Box className={classes.content} id={id}>
      <Typography variant="h5" className={classes.vision}>
        “{vision}”
      </Typography>
      <Divider className={classes.divider} />
      <Box className={classes.article}>
        {ARTICLE.map((item, index) => (
          <Item key={index} object={item} index={index} files={files} />
        ))}
      </Box>
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
          <Fragment key={'ID' + attributes.name + id}>
            <Content
              id={'ID' + attributes.name + id}
              attributes={attributes}
              files={files}
            />
            <Divider style={{ width: '100%' }} />
          </Fragment>
        );
      })}
    </div>
  );
}
