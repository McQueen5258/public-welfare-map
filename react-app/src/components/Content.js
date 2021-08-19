import React, { Component } from 'react';
export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="蝌蚪实务学堂">
          <img src="./Images/Kido/640.webp" alt="" />
          {/* 有意义的话 */}
          <h1 className="title">"使命和愿景是：探索青少年职业发展新路径，为好的社会培养“珍贵的普通人”。"</h1>
          <div className="paragraphs">
            <p className="paragraph">实务学堂是一个面向 16-18 岁农民（工）子女的非学历职业教育公益项目，2018 年3月创立于北京，2020年迁址广州市海珠区小洲村。</p>
            <p className="paragraph">创办三年多，受到了广泛的社会关注，得到各界的肯定与资助，并开始向社会输出毕业生或在校实习生，积累了良好的口碑和社会影响力。</p>
            <p className="paragraph">未来 2-3 年，实务学堂计划每年招收 20-30 名学生。2021 年秋季招生已经启动，欢迎咨询。</p>
          </div>
        </div>
      </div>
    );
  }
}
