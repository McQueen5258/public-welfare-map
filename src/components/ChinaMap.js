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
    // // 坐标图标
    // const MapCoordinates = [
    //   /* 坐标 */
    //   {
    //     d: 'M514.186237 251.542159v59.136664c69.876292 0.474726 126.539386 59.727989 126.539385 132.444307 0 72.712154-56.654765 131.848818-126.539385 132.31938v178.355279c4.130946-0.237363 12.159641-10.269067 20.542297-20.892095 58.195541-73.424242 129.720881-177.65152 148.843165-224.986669 7.791332-21.246057 11.809843-43.907963 11.809843-67.165359-0.012493-103.98575-81.223902-188.736781-181.195305-189.211507z',
    //     fill: '#FEC8BE'
    //   },
    //   /* 内圆环 */
    //   {
    //     d: 'M629.627868 436.618555l-0.358126-5.900757-0.82036-5.784158-0.945287-5.663394-1.303413-5.667559-1.649048-5.546795-1.773975-5.430196-2.123772-5.309432-2.356972-5.076233-2.602663-5.076234-2.710933-4.838871-3.064896-4.722271-3.306423-4.601508-3.414694-4.36831-3.660385-4.25171-3.901912-4.010182-4.014347-3.897748-4.25171-3.660385-4.368309-3.423023-4.484909-3.306422-4.834707-2.948297-4.847199-2.831697-4.947141-2.598499-5.196998-2.356971-5.305268-2.007174-5.43436-1.88641-5.43436-1.536612-5.663394-1.299249-5.788322-1.061887-5.784158-0.707924-5.904922-0.470561-6.017356-0.120764-5.900757 0.120764-5.900757 0.470561-5.900758 0.707924-5.667558 1.061887-5.663395 1.299249-5.550959 1.536612-5.430196 1.88641-5.192833 2.007174-5.196997 2.356971-5.076233 2.598499-4.838871 2.831697-4.722272 2.948297-4.601508 3.306422-4.368309 3.423023-4.25171 3.660385-4.014347 3.897748-3.897748 4.010182-3.656221 4.25171-3.423022 4.36831-3.185659 4.601508-3.06906 4.722271-2.831698 4.838871-2.598498 5.076234-2.244537 5.076233-2.123772 5.309432-1.890575 5.430196-1.532448 5.546795-1.299249 5.667559-1.061886 5.663394-0.707925 5.784158-0.470561 5.900757-0.116599 6.017357 0.116599 6.021521 0.470561 5.900757 0.707925 5.784158 1.061886 5.667558 1.299249 5.663395 1.532448 5.550959 1.890575 5.430196 2.123772 5.192833 2.244537 5.196997 2.598498 5.076234 2.831698 4.83887 3.06906 4.722272 3.185659 4.601508 3.423022 4.364145 3.656221 4.25171 3.897748 4.018511 4.014347 3.77282 4.25171 3.660385 4.368309 3.539622 4.601508 3.193988 4.722272 3.06906 4.838871 2.835861 5.076233 2.477735 5.196997 2.361136 5.192833 2.123773 5.430196 1.778139 5.550959 1.649047 5.663395 1.29925 5.667558 0.949451 5.900758 0.824524 5.900757 0.466397 5.900757 0.120763 6.017356-0.120763 5.904922-0.466397 5.784158-0.824524 5.788322-0.949451 5.550959-1.29925 5.546795-1.649047 5.43436-1.778139 5.305268-2.123773 5.196998-2.361136 4.947141-2.477735 4.847199-2.835861 4.718108-3.06906 4.601508-3.193988 4.368309-3.539622 4.25171-3.660385 4.014347-3.77282 3.901912-4.018511 3.660385-4.25171 3.414694-4.364145 3.306423-4.601508 3.064896-4.722272 2.710933-4.83887 2.602663-5.076234 2.356972-5.196997 2.123772-5.192833 1.773975-5.430196 1.649048-5.550959 1.303413-5.663395 0.945287-5.667558 0.82036-5.784158 0.358126-5.900757 0.241527-6.021521-0.241527-6.017357z m-21.591691 10.872885l-0.362291 4.843035-0.58716 4.722271-0.828688 4.722272-1.061887 4.484908-1.303413 4.484909-1.415849 4.484909-1.773975 4.25171-1.88641 4.25171-2.007173 4.010183-2.352808 4.014347-2.481899 3.776984-2.594334 3.776984-2.84419 3.543786-2.944132 3.423022-3.189824 3.302259-3.310587 3.185659-3.414694 2.952461-3.664549 2.840026-3.660385 2.594334-3.893584 2.481899-3.901912 2.356972-4.126782 2.003009-4.130947 2.003009-4.368309 1.649048-4.368309 1.532447-4.489073 1.178486-4.601508 1.061887-4.601508 0.828687-4.838871 0.707925-4.718107 0.353962-4.959634 0.116599-4.838871-0.116599-4.843035-0.353962-4.722272-0.707925-4.601508-0.828687-4.601507-1.061887-4.484909-1.178486-4.484909-1.532447-4.25171-1.649048-4.25171-2.003009-4.010183-2.003009-4.014347-2.356972-3.776984-2.481899-3.776984-2.594334-3.543786-2.840026-3.543786-2.952461-3.185659-3.185659-3.18566-3.302259-2.95246-3.423022-2.831698-3.543786-2.715097-3.776984-2.477735-3.776984-2.244537-4.014347-2.123773-4.010183-1.890574-4.25171-1.653212-4.25171-1.536612-4.484909-1.299249-4.484909-1.061886-4.484908-0.824524-4.722272-0.591325-4.722271-0.353962-4.843035-0.116599-4.838871 0.116599-4.838871 0.353962-4.838871 0.591325-4.722271 0.824524-4.722272 1.061886-4.484908 1.299249-4.601508 1.536612-4.368309 1.653212-4.25171 1.890574-4.251711 2.123773-4.014347 2.244537-4.014347 2.477735-3.893583 2.715097-3.660386 2.831698-3.660385 2.95246-3.423022 3.18566-3.306423 3.302258-3.06906 3.423023-3.06906 3.543785-2.715098 3.776985-2.715097 3.776984-2.477735 4.014347-2.244537 4.010183-2.123773 4.25171-1.890574 4.25171-1.649047 4.484909-1.536612 4.484908-1.29925 4.601508-1.061886 4.601508-0.824524 4.722272-0.591325 4.843035-0.353962 4.83887-0.116599 4.959635 0.116599 4.722271 0.353962 4.838871 0.591325 4.597344 0.824524 4.597343 1.061886 4.489073 1.29925 4.36831 1.536612 4.368309 1.649047 4.130946 1.890574 4.130947 2.123773 3.897748 2.244537 3.897748 2.477735 3.660385 2.715097 3.660385 2.715098 3.418858 3.06906 3.310587 3.06906 3.185659 3.306423 2.952461 3.423022 2.840025 3.660385 2.594335 3.660386 2.481899 3.893583 2.240372 4.014347 2.127937 4.014347 1.88641 4.251711 1.773975 4.25171 1.415849 4.368309 1.303414 4.601508 1.061886 4.484908 0.828688 4.722272 0.587161 4.722271 0.36229 4.838871 0.237363 4.838871-0.241527 4.838871z',
    //     fill: '#FEC8BE'
    //   }
    // ];

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
              });
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
