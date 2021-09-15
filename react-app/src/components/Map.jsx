import React, { Component } from "react";
import geoJson from './geoJson/中华人民共和国.json';
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
    let name = 'chinaMap';
    echarts.registerMap(name, geoJson);
    const zunyiData = [
      {
        "adcode": "520321",
        // "people_count_2010": 942904,
        "lat": 23.063356,
        "lng": 113.357574,
        "name": "实务学堂",
        "level": "district",
        "parent": "遵义市"
      }
    ];

    let option = {
      backgroundColor: '#fff',
      title: {
        top: 20,
        text: '公益地图',
        subtext: '',
        x: 'center',
        textStyle: {
          color: '#000'
        }
      },
      geo: {
        type: 'map',
        map: name, //'jiangxi'
        roam: false,
        geoIndex: 1,
        zoom: 1.1,  //地图的比例
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#000000'  //字体颜色
            }
          },
          emphasis: {
            textStyle: {
              color: '#000000'  //选中后的字体颜色
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#EEEEEE',
            borderColor: '#8b8b8b',
          },
          emphasis: {
            areaColor: '#ffffff',
          }
        },
      },
      series: {
        type: 'scatter',
        coordinateSystem: 'geo',//使用地理坐标系geo
        showEffectOn: 'render',
        rippleEffect: {
          period: 15,
          scale: 4,
          brushType: 'fill'
        },
        hoverAnimation: true,
        // itemStyle: {
        //   normal: {
        //     color: '#fffd21', //设置圆点的颜色
        //     shadowBlur: 10,
        //     shadowColor: '#333'
        //   }
        // },
        // symbolSize: function (params) {
        //   console.log('paramsparams', params[2])
        //   if (params[2] > 30)
        //     return params[2] / 5
        //   else
        //     return 3
        // }, //圆点的大小可以自行设置，这里不赘述
        // data: areaData,
        data: zunyiData.map(item => {
          console.log(item);
          return {
            name: item.name,
            value: [item.lng, item.lat]
          };
        }), ...zunyiData.map((item, index) => {
          return {
              type: "scatter",
              coordinateSystem: "geo",
              //自定义图片的 位置（lng, lat）
              data: [{ name: item.name, value: [item.lng, item.lat] }],
              //自定义图片的 大小
              symbolSize: [80, 60],
              //自定义图片的 路径
              symbol: 'Images/Kido/Logo/Kido.png'
          }
      })

      }
    }
    myChart.setOption(option, true);

    // [
    //   [113.357574, 23.063356],
    // ]


    // myChart.setOption({
    //   geo: {
    //     map: 'jining',
    //     roam: false,   //拖动、放大
    //     zoom: 1.0,
    //     type: 'map',
    //     silent: true,
    //     layoutCenter: ['50%', '50%'],
    //     y: 60,
    //     mapLocation: {
    //       y: 60
    //     },
    //     tooltip: {
    //       show: false,       //不显示提示标签
    //     },
    //     label: {
    //       normal: {
    //         show: false,//省份标签
    //         textStyle: {
    //           color: 'white',
    //           fontWeight: 500,
    //           fontSize: 16,
    //         }//省份标签字体颜色
    //       },
    //       emphasis: {//对应的鼠标悬浮效果
    //         show: false,
    //         textStyle: {
    //           color: "#324324",
    //         },
    //       }
    //     },
    //     itemStyle: {
    //     normal: {
    //         borderWidth: .5,//区域边框宽度
    //         borderColor: '#fff',//区域边框颜色
    //         // areaColor: "#4260ff",//区域颜色
    //         label: {show: false},
    //     },
    //     emphasis: {
    //         show: false,
    //         borderWidth: .5,
    //         borderColor: '#4b0082',
    //         areaColor: "#ffdead",
    //     }
    //     },
    //   },
    // });

    // //点击显示点击的地区
    // // myChart.on('click', function (params) {
    // //     alert(params.name);
    // // });
  }

  render() {
    return (
      <div id="mainMap" style={{ width: '100vm', height: '200vh' }}></div>
    );
  }

}
































// import React from 'react';
// // import geojson from './geojson.json';
// // import china from './中华人民共和国.json';
// import china1 from './d3Json/china.json';
// // import china3 from './中国.json';
// // import china4 from './中国地图.json'
// import { geoMercator, geoPath } from 'd3-geo';
// import { select } from 'd3-selection';


// export default class Map extends React.Component {
//   render() {
//     const width = 700;
//     const height = width * 0.5;
//     const projection = geoMercator().fitExtent(
//       [[0, 0], [width, height]],
//       china1
//     );
//     const path = geoPath().projection(projection);
//     // console.log(china1.features.Name)
//     // console.log(china1.features.Name)
//     return (
//       <svg width={width} height={height}>
//         <g className="geojson-layer">
//           {
//             china1.features.map(d => (
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
