import React, { useState, useEffect, useRef } from 'react';
import { select, geoMercator, geoPath, json } from 'd3';
// import * as topojson from "topojson";
import Card from './Card';
import { makeStyles } from '@material-ui/styles';
/*
 * // TODO 可添加坐标 √
 * // TODO 地图剧中 √
 * // TODO 响应式 √
 * // TODO 设置颜色 √(后续改更好看的)
 * // TODO 坐标样式
 * // TODO 限制地图的大小
 * // TODO 使用TopoJson修复GeoJson的问题
 */
// ----------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  div: {
    maxWidth: '1400px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cardRoot: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    userSelect: 'none',
    color: 'black'
  },
  cardContent: {
    height: '100%',
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px'
  },
  cardContentText: {
    margin: '0'
  },
  subtitle1: {
    fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    lineHeight: '1.75',
    letterSpacing: '0.00938em'
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '500',
    lineHeight: '1.57',
    letterSpacing: '0.00714em'
  },
  cardFounder: {
    color: 'rgb(165, 36, 56)'
  },
  cardPlaceName: {
    color: 'rgb(87, 91, 102)'
  },
  cardImg: {
    height: '100%',
    width: '30%',
    // backgroundImage: "url(Images/Kido/Logo/Kido.png)",
    backgroundSize: '80%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}));

// ----------------------------------------------------------------

function ChinaMap() {
  const classes = useStyles();
  const [locking, setLocking] = useState(false);
  const d3Map = useRef();

  const handleClick = (projectId, event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${projectId}`
    );
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
    // handleDrawerToggle();
  };

  useEffect(() => {
    /***** 1.初始化 *****/
    // 画板大小
    const SIZE = {
      width: 1200,
      height: 1000,
      margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
      }
    };

    const svg = select(d3Map.current);

    const g = svg
      .append('g')
      .attr('transform', `translate(${SIZE.margin.top}, ${SIZE.margin.left})`);

    // 黑板(投影方式)
    const projection = geoMercator()
      .center([107, 31])
      .scale(900)
      .translate([SIZE.width / 2, SIZE.height / 2]);

    // 地理路径生成器
    const path = geoPath().projection(projection);

    /***** 2.画地图 *****/
    async function draw() {
      /***** 1.引入中国地图数据 *****/
      const Maps = {};
      try {
        // do something
        Maps.map1 = await json('/Map/ChinaData.geo.json');
        Maps.map2 = await json('/Map/data.ali.json'); // ? 无法兼容我的代码
        Maps.map3 = await json('/Map/data.jiangshukeji.json'); // ? 无法兼容我的代码
      } catch (err) {
        // do something
        return console.error(err);
      }

      /***** 2.将地图投射到页面上 *****/
      // 1.显示地图表面
      g.selectAll('g')
        .data(Maps.map1.features)
        .enter()
        .append('g')
        .append('path')
        .attr('d', path)
        .attr('stroke', '#d8d7d7')
        .attr('stroke-width', 1)
        // .attr("opacity", 0.6)
        .attr('fill', 'white')
        .append('title')
        .text((d) => d.properties.name);

      /***** 3.标坐标(place) *****/
      async function spot() {
        /***** 1.引入公益坐标(places) *****/
        let places = {};
        try {
          // do something
          places = await json('/Data/PublicWelfareCoordinates/data.geo.json');
        } catch (err) {
          // do something
          return console.error(err);
        }

        /***** 2.将公益地点添加到地图上 *****/

        // g.selectAll('use')
        //   .data(places.points)
        //   .enter()
        //   .append('use')
        //   .attr('id', 'mapCoordinates')
        //   .attr('xlink:href', '#mapCoordinates')
        //   .attr('x', (d) => {
        //     let peking = d.geometry.coordinates;
        //     let proPeking = projection(peking);
        //     return proPeking[0]/0;
        //   })
        //   .attr('y', (d) => {
        //     let peking = d.geometry.coordinates;
        //     let proPeking = projection(peking);
        //     return proPeking[1]/0;
        //   })
        // .attr('width', '10')
        // .attr('height', '50');

        g.append('g')
          .selectAll('image')
          .data(places.points)
          .enter()
          .append('g')
          .attr('id', (d) => `map-${d.name}`)
          .each(function (d) {
            console.log(select(this));
            const g = select(this)
              .append('g')
              .attr('id', `point-${d.name}`)
              .on('mouseover', (e, d) => {
                select(`#point-${d.name}-circle`)
                  .transition()
                  .style('opacity', 0.5)
                  .duration(500);

                select(`#point-${d.name}-card`)
                  .transition()
                  .style('opacity', 1)
                  .duration(500);
              })
              .on('mouseout', function (e, d) {
                select(`#point-${d.name}-circle`)
                  .transition()
                  .style('opacity', 0)
                  .duration(500);

                select(`#point-${d.name}-card`)
                  .transition()
                  .style('opacity', 0)
                  .duration(500);
              })
              .on('click', (e, { name }) => handleClick(name, e));
            g.append('circle')
              .attr('id', `point-${d.name}-circle`)
              .attr('class', `point-${d.name}-icon`)
              .attr('cx', (d) => {
                let peking = d.geometry.coordinates;
                let proPeking = projection(peking);
                return proPeking[0];
              })
              .attr('cy', (d) => {
                let peking = d.geometry.coordinates;
                let proPeking = projection(peking);
                return proPeking[1] - 25 / 2;
              })
              .attr('r', 25)
              .attr('fill', '#33c9dc')
              .style('opacity', 0);

            g.append('image')
              .attr('id', `point-${d.name}-image`)
              .attr('class', `point-${d.name}-icon`)
              .attr('x', (d) => {
                let peking = d.geometry.coordinates;
                let proPeking = projection(peking);
                return proPeking[0] - 25 / 2;
              })
              .attr('y', (d) => {
                let peking = d.geometry.coordinates;
                let proPeking = projection(peking);
                return proPeking[1] - 25;
              })
              .attr('xlink:href', '固定坐标点.svg')
              .attr('width', '25px')
              .attr('height', '25px')
              .attr('fill', 'blue')
              .attr('class', 'point');

            select(this)
              .append('foreignObject')
              .attr('id', `point-${d.name}-card`)
              .attr('class', `point-${d.name}-icon`)
              .style('opacity', 0)
              .style('pointer-events', 'none')
              .attr('x', (d) => {
                let peking = d.geometry.coordinates;
                let proPeking = projection(peking);
                return proPeking[0] + 25 / 2;
              })
              .attr('y', (d) => {
                let peking = d.geometry.coordinates;
                let proPeking = projection(peking);
                return proPeking[1] - 25 / 4;
              })
              .attr('width', '400px')
              .attr('height', '130px')
              .style('box-shadow', 'rgb(92 99 105 / 20%) 0px 0px 20px 3px')
              .append('xhtml:div')
              .attr('class', classes.cardRoot)
              .attr('xmlns', 'http://www.w3.org/1999/xhtml')
              .each(function (d) {
                select(this)
                  .append('xhtml:div')
                  .attr('class', classes.cardContent)
                  .each(function (d) {
                    select(this)
                      .append('xhtml:p')
                      .attr(
                        'class',
                        `${classes.cardContentText} ${classes.subtitle1}`
                      )
                      .text((d) => d?.properties?.vision);

                    select(this)
                      .append('xhtml:p')
                      .attr(
                        'class',
                        `${classes.cardContentText} ${classes.subtitle2}`
                      )
                      .each(function (d) {
                        select(this)
                          .append('xhtml:span')
                          .attr('class', classes.cardFounder)
                          .text(d?.properties?.founder);

                        select(this)
                          .append('xhtml:span')
                          .attr('class', classes.cardPlaceName)
                          .text(
                            `, ${d?.properties?.position?.province} ${d?.properties?.position?.city}`
                          );
                      });
                  });
                select(this)
                  .append('xhtml:div')
                  .attr('class', classes.cardImg)
                  .style(
                    'background-image',
                    `url(${d?.properties?.titleLogo})`
                  );
              });
          });

        // g.selectAll('circle')
        //   .data(places.points)
        //   .enter()
        //   .append('circle')
        //   .attr('cx', (d) => {
        //     let peking = d.geometry.coordinates;
        //     let proPeking = projection(peking);
        //     return proPeking[0];
        //   })
        //   .attr('cy', (d) => {
        //     let peking = d.geometry.coordinates;
        //     let proPeking = projection(peking);
        //     return proPeking[1];
        //   })
        //   .attr('fill', 'blue')
        //   .attr('class', 'point')
        //   .attr('r', 6)
        //   .attr('d', path)
        //   .on('mouseover', function (e, d) {
        //     const circle = e.path[0];
        //     circle.setAttribute('r', 12);
        //     const { clientWidth } = cardCom.current;
        //     const left =
        //       document.body.clientWidth - (e.pageX + 3) - clientWidth <= 0
        //         ? e.pageX + 3 - clientWidth
        //         : e.pageX + 3;
        //     return setCard({
        //       ...card,
        //       visibility: true,
        //       top: e.pageY + 8,
        //       left: left,
        //       properties: d.properties
        //     });
        //   })
        //   .on('mouseout', function (e, d) {
        //     const circle = e.path[0];
        //     circle.setAttribute('r', 6);
        //     return setCard({ ...card, visibility: false });
        //   });
      }
      spot();
    }
    draw();
  }, [locking]);
  return (
    <div id="map" className={classes.root}>
      <div className={classes.div}>
        <svg ref={d3Map} viewBox={`0 0 1200 1000`}></svg>
      </div>
    </div>
  );
}

export default ChinaMap;
