import React, { useState, useEffect, useRef } from 'react';
import { select, geoMercator, geoPath, json } from 'd3';
// import * as topojson from "topojson";
import Card from './Card';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

/*
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
    color: 'black',
    zIndex: 10
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
  const {
    publicWelfareData: data,
    error: getDataError,
    isLoading: isDataLoading
  } = useSelector((state) => state.publicWelfare);
  const {
    ChinaMapData: map,
    error: getMapError,
    isLoading: isMapLoading
  } = useSelector((state) => state.ChinaMap);

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

    g.selectAll('g')
      .data(map)
      .enter()
      .append('g')
      .append('path')
      .attr('d', path)
      .attr('stroke', '#d8d7d7')
      .attr('stroke-width', 1)
      // .attr("opacity", 0.6)
      .attr('fill', 'white')
      .append('title')
      .text((d) => d?.name);

    g.append('g')
      .selectAll('image')
      .data(data)
      .enter()
      .append('g')
      .attr('id', ({ attributes: d }) => `map-${d?.name + d?.id}`)
      .each(function ({ attributes: d }) {
        const g = select(this)
          .append('g')
          .attr('id', `point-${d?.name + d?.id}`)
          .on('mouseover', (e, { attributes: d }) => {
            select(`#point-${d?.name + d?.id}-circle`)
              .transition()
              .style('opacity', 0.5)
              .duration(500);

            select(`#point-${d?.name + d?.id}-card`)
              .transition()
              .style('opacity', 1)
              .duration(500);
          })
          .on('mouseout', function (e, { attributes: d }) {
            select(`#point-${d?.name + d?.id}-circle`)
              .transition()
              .style('opacity', 0)
              .duration(500);

            select(`#point-${d?.name + d?.id}-card`)
              .transition()
              .style('opacity', 0)
              .duration(500);
          })
          .on('click', (e, d) =>
            handleClick(`ID${d.attributes.name + d.id}`, e)
          );
        g.append('circle')
          .attr('id', `point-${d?.name + d?.id}-circle`)
          .attr('class', `point-${d?.name + d?.id}-icon`)
          .attr('cx', ({ attributes: d }) => {
            let peking = d?.position?.geometry;
            let proPeking = projection(peking);
            return proPeking[0];
          })
          .attr('cy', ({ attributes: d }) => {
            let peking = d?.position?.geometry;
            let proPeking = projection(peking);
            return proPeking[1] - 25 / 2;
          })
          .attr('r', 25)
          .attr('fill', '#33c9dc')
          .style('opacity', 0);

        g.append('image')
          .attr('id', `point-${d.name + d.id}-image`)
          .attr('class', `point-${d.name + d.id}-icon`)
          .attr('x', ({ attributes: d }) => {
            let peking = d.position.geometry;
            let proPeking = projection(peking);
            return proPeking[0] - 25 / 2;
          })
          .attr('y', ({ attributes: d }) => {
            let peking = d.position.geometry;
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
          .attr('id', `point-${d.name + d.id}-card`)
          .attr('class', `point-${d.name + d.id}-icon`)
          .style('opacity', 0)
          .style('pointer-events', 'none')
          .attr('x', ({ attributes: d }) => {
            let peking = d.position.geometry;
            let proPeking = projection(peking);
            return proPeking[0] + 25 / 2;
          })
          .attr('y', ({ attributes: d }) => {
            let peking = d.position.geometry;
            let proPeking = projection(peking);
            return proPeking[1] - 25 / 4;
          })
          .attr('width', '400px')
          .attr('height', '130px')
          .style('box-shadow', 'rgb(92 99 105 / 20%) 0px 0px 20px 3px')
          .append('xhtml:div')
          .attr('class', classes.cardRoot)
          .attr('xmlns', 'http://www.w3.org/1999/xhtml')
          .each(function () {
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
                  .text(({ attributes: d }) => d.vision);

                select(this)
                  .append('xhtml:p')
                  .attr(
                    'class',
                    `${classes.cardContentText} ${classes.subtitle2}`
                  )
                  .each(function ({ attributes: d }) {
                    select(this)
                      .append('xhtml:span')
                      .attr('class', classes.cardFounder)
                      .text(d.founder);

                    select(this)
                      .append('xhtml:span')
                      .attr('class', classes.cardPlaceName)
                      .text(`, ${d.position.province} ${d.position.city}`);
                  });
              });
            select(this)
              .append('xhtml:div')
              .attr('class', classes.cardImg)
              .style('background-image', `url(${d?.titleLogo?.attributes?.url})`);
          });
      });
  }, [map, isMapLoading, data, isDataLoading]);

  return (
    <div id="map" className={classes.root}>
      <div className={classes.div}>
        <svg ref={d3Map} viewBox={`0 0 1200 1000`}></svg>
      </div>
    </div>
  );
}

export default ChinaMap;
