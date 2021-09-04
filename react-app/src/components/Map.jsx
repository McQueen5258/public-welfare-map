import React, { Component } from "react";
//引入json地图文件（我这里引用的济宁市）
import geoJson from './geoJson/中国地图.json';
//引用echart
import * as echarts from 'echarts';


export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.initalECharts();
  }

  initalECharts() {

    echarts.registerMap('jining', geoJson);

    //初始化ECharts实例
    const myChart = echarts.init(document.getElementById('mainMap'));
    myChart.setOption({
      geo: {
        map: 'jining',
        roam: false,   //拖动、放大
        zoom: 1.0,
        type: 'map',
        silent: true,
        layoutCenter: ['50%', '50%'],
        y: 60,
        mapLocation: {
          y: 60
        },
        tooltip: {
          show: false,       //不显示提示标签
        },
        label: {
          normal: {
            show: false,//省份标签
            textStyle: {
              color: 'white',
              fontWeight: 500,
              fontSize: 16,
            }//省份标签字体颜色
          },
          emphasis: {//对应的鼠标悬浮效果
            show: false,
            textStyle: {
              color: "#324324",
            },
          }
        },
        itemStyle: {
        normal: {
            borderWidth: .5,//区域边框宽度
            borderColor: '#fff',//区域边框颜色
            // areaColor: "#4260ff",//区域颜色
            label: {show: false},
        },
        emphasis: {
            show: false,
            borderWidth: .5,
            borderColor: '#4b0082',
            areaColor: "#ffdead",
        }
        },
      },
    });

    //点击显示点击的地区
    // myChart.on('click', function (params) {
    //     alert(params.name);
    // });
  }

  render() {
    return (
      <div id="mainMap" style={{ width: '100vm', height: '200vh' }}></div>
    );
  }

}
































// import React from 'react';
// import geojson from './geojson.json';
// import china from './中华人民共和国.json';
// import china1 from './china.json';
// import china3 from './中国.json';
// import china4 from './中国地图.json'
// import { geoMercator, geoPath } from 'd3-geo';
// import { select } from 'd3-selection';


// export default class Map extends React.Component {
//   render() {
//     const width = 700;
//     const height = width * 0.5;
//     const projection = geoMercator().fitExtent(
//       [[0, 0], [width, height]],
//       china4
//     );
//     const path = geoPath().projection(projection);
//     console.log(china.features.Name)
//     console.log(china1.features.Name)
//     return (
//       <svg width={width} height={height}>
//         <g className="geojson-layer">
//           {
//             china4.features.map(d => (
//               <path
//                 key={d.properties.Name}
//                 d={path(d)}
//                 fill="#eee"
//                 stroke="black"
//                 strokeWidth="1"
//                 strokeOpacity="0.5"
//                 // onMouseEnter={(e) => {
//                 //   select(e.target)
//                 //     .attr('fill', '#000')
//                 // }}
//                 // onMouseOut={(e) => {
//                 //   select(e.target)
//                 //     .attr('fill', '#eee')
//                 // }}
//               />
//             ))
//           }
//         </g>
//       </svg>
//     )
//   }
// }
