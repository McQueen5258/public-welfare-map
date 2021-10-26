import React, { useState, useEffect, useRef } from "react";
import { select, geoMercator, geoPath, json } from "d3";
// import * as topojson from "topojson";
import Card from "./Card";
import { makeStyles } from "@material-ui/core/styles";
/*
 * // TODO 可添加坐标 √
 * // TODO 地图剧中 √
 * // TODO 响应式 √
 * // TODO 设置颜色 √(后续改更好看的)
 * // TODO 坐标样式
 * // TODO 限制地图的大小
 * // TODO 使用TopoJson修复GeoJson的问题
 */

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  div: {
    maxWidth: "1400px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function ChinaMap() {
  const classes = useStyles();
  const [card, setCard] = useState({
    visibility: false,
    top: "0",
    left: "0",
    properties: {
      vision: "",
      founder: "",
      logo: "",
      position: {
        province: "",
        city: "",
        district: "",
        village: "",
        street: "",
        detailed: "",
      },
    },
  });
  const [locking, setLocking] = useState(false);
  const d3Map = useRef();
  const cardCom = useRef();
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
        left: 10,
      },
    };
    const svg = select(d3Map.current);

    const g = svg
      .append("g")
      .attr("transform", `translate(${SIZE.margin.top}, ${SIZE.margin.left})`);

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
        Maps.map1 = await json("/Map/ChinaData.geo.json");
        Maps.map2 = await json("/Map/data.ali.json"); // ? 无法兼容我的代码
        Maps.map3 = await json("/Map/data.jiangshukeji.json"); // ? 无法兼容我的代码
      } catch (err) {
        // do something
        return console.error(err);
      }

      /***** 2.将地图投射到页面上 *****/
      // 1.显示地图表面
      g.selectAll("g")
        .data(Maps.map1.features)
        .enter()
        .append("g")
        .append("path")
        .attr("d", path)
        .attr("stroke", "#d8d7d7")
        .attr("stroke-width", 1)
        // .attr("opacity", 0.6)
        .attr("fill", "white")
        .append("title")
        .text((d) => d.properties.name);

      /***** 3.标坐标(place) *****/
      async function spot() {
        /***** 1.引入公益坐标(places) *****/
        let places = {};
        try {
          // do something
          places = await json("/Data/PublicWelfareCoordinates/data.geo.json");
        } catch (err) {
          // do something
          return console.error(err);
        }

        /***** 2.将公益地点添加到地图上 *****/

        g.selectAll("circle")
          .data(places.points)
          .enter()
          .append("circle")
          .attr("cx", (d) => {
            let peking = d.geometry.coordinates;
            let proPeking = projection(peking);
            return proPeking[0];
          })
          .attr("cy", (d) => {
            let peking = d.geometry.coordinates;
            let proPeking = projection(peking);
            return proPeking[1];
          })
          .attr("fill", "blue")
          .attr("class", "point")
          .attr("r", 6)
          .attr("d", path)
          .on("mouseover", function (e, d) {
            const circle = e.path[0];
            circle.setAttribute("r", 12);
            const { clientWidth } = cardCom.current;
            const left =
              document.body.clientWidth - (e.pageX + 3) - clientWidth <= 0
                ? e.pageX + 3 - clientWidth
                : e.pageX + 3;
            return setCard({
              ...card,
              visibility: true,
              top: e.pageY + 8,
              left: left,
              properties: d.properties,
            });
          })
          .on("mouseout", function (e, d) {
            const circle = e.path[0];
            circle.setAttribute("r", 6);
            return setCard({ ...card, visibility: false });
          });
      }
      spot();
    }
    draw();
  }, [locking]);
  return (
    <div id="map" className={classes.root}>
      <div className={classes.div}>
        <Card ref={cardCom} card={card} />
        <svg ref={d3Map} viewBox={`0 0 1200 1000`}>
          {/* 
          // TODO 之后可能需要用的坐标(icon)
        */}
          {/* <svg
          t="1633709593797"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3252"
          width="200"
          height="200"
        >
          <path
            d="M518.4 48c-214.4 0-390.4 176-390.4 393.6 0 48 16 99.2 41.6 156.8 28.8 57.6 70.4 118.4 118.4 182.4 35.2 41.6 73.6 83.2 108.8 121.6 12.8 12.8 25.6 25.6 35.2 35.2 6.4 6.4 12.8 9.6 12.8 12.8l0 0c38.4 38.4 102.4 38.4 137.6 0 3.2-3.2 6.4-6.4 12.8-12.8 9.6-9.6 22.4-22.4 35.2-35.2 38.4-38.4 73.6-80 108.8-121.6 51.2-60.8 92.8-124.8 118.4-182.4 28.8-57.6 41.6-108.8 41.6-156.8C908.8 224 732.8 48 518.4 48zM822.4 576c-25.6 54.4-64 112-115.2 172.8-35.2 41.6-70.4 83.2-105.6 118.4-12.8 12.8-25.6 25.6-35.2 35.2-6.4 6.4-9.6 9.6-12.8 12.8-19.2 19.2-51.2 19.2-70.4 0l0 0c-3.2-3.2-6.4-6.4-12.8-12.8-9.6-9.6-22.4-22.4-35.2-35.2-35.2-38.4-73.6-76.8-105.6-118.4-48-60.8-86.4-118.4-115.2-172.8-25.6-51.2-38.4-96-38.4-134.4 0-192 153.6-345.6 342.4-345.6 188.8 0 342.4 153.6 342.4 345.6C860.8 480 848 524.8 822.4 576z"
            p-id="3253"
            fill="#8a8a8a"
          ></path>
          <path
            d="M518.4 262.4c-96 0-169.6 76.8-169.6 172.8 0 96 76.8 172.8 169.6 172.8s169.6-76.8 169.6-172.8C688 339.2 614.4 262.4 518.4 262.4zM518.4 556.8c-67.2 0-121.6-54.4-121.6-124.8s54.4-124.8 121.6-124.8c67.2 0 121.6 54.4 121.6 124.8S585.6 556.8 518.4 556.8z"
            p-id="3254"
            fill="#8a8a8a"
          ></path> */}
          {/* </svg> */}
        </svg>
      </div>
    </div>
  );
}

export default ChinaMap;
