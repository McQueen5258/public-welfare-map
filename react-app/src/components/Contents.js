import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    border: "1px solid #eaeaea",
    alignSelf: "center",
  },
  蝌蚪实务学堂: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: { width: "75%" },
  paragraphs: {
    display: "flex",
    flexDirection: "column",
  },
  paragraph: {
    width: "70%",
    alignSelf: "center",
  },
}));
// TODO 新建可以添加每个公益项目的单个内容组件
export default function Contents() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.蝌蚪实务学堂}>
        <img src="./Images/Kido/640.webp" alt="" />
        {/* 有意义的话 */}
        <h1 className={classes.title}>
          "使命和愿景是：探索青少年职业发展新路径，为好的社会培养“珍贵的普通人”。"
        </h1>
        <div className={classes.paragraphs}>
          <p className={classes.paragraph}>
            实务学堂是一个面向 16-18
            岁农民（工）子女的非学历职业教育公益项目，2018
            年3月创立于北京，2020年迁址广州市海珠区小洲村。
          </p>
          <p className={classes.paragraph}>
            创办三年多，受到了广泛的社会关注，得到各界的肯定与资助，并开始向社会输出毕业生或在校实习生，积累了良好的口碑和社会影响力。
          </p>
          <p className={classes.paragraph}>
            未来 2-3 年，实务学堂计划每年招收 20-30 名学生。2021
            年秋季招生已经启动，欢迎咨询。
          </p>
        </div>
      </div>
    </div>
  );
}
