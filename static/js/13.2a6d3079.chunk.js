(this["webpackJsonppublic-welfare"]=this["webpackJsonppublic-welfare"]||[]).push([[13],{202:function(t,e,r){"use strict";r.r(e);var a=r(7),n=r.n(a),c=r(105),i=r(11),o=r(106),s=r(0),l=r(195),p=r(235),u=r(103),d=r(226),b=r(4),j=Object(p.a)((function(t){return{root:{position:"absolute",width:"400px",height:"130px",backgroundColor:"white",boxShadow:"0 10px 25px rgba(92, 99, 105, .2)",display:"flex",flexDirection:"row",userSelect:"none",transition:"all 1s"},cardContent:{height:"100%",width:"70%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"0 20px"},cardImg:{height:"100%",width:"30%",backgroundSize:"70%",backgroundPosition:"center",backgroundRepeat:"no-repeat"},text:{margin:"0"},founder:{color:"rgb(165, 36, 56)"},placeName:{color:"rgb(87, 91, 102)"}}}));function f(t,e){var r=t.card,a=j(),n=r.properties,c=n.founder,i=n.position,o=n.vision,s=n.titleLogo,l=i.province,p=i.city;return Object(b.jsx)(d.a,{in:r.visibility,timeout:1e3,children:Object(b.jsxs)("div",{ref:e,className:a.root,style:{top:r.top+"px",left:r.left+"px",transition:"all 1s"},children:[Object(b.jsxs)("div",{className:a.cardContent,children:[Object(b.jsx)(u.a,{variant:"subtitle1",className:a.text,children:o}),Object(b.jsxs)(u.a,{variant:"subtitle2",className:a.text,children:[Object(b.jsx)("span",{className:a.founder,children:c}),Object(b.jsxs)("span",{className:a.placeName,children:[", ",l,p]})]})]}),Object(b.jsx)("div",{className:a.cardImg,style:{backgroundImage:"url("+s+")"}})]})})}var h=Object(s.forwardRef)(f),x=Object(p.a)((function(t){return{root:{width:"100%"},div:{maxWidth:"1400px",marginLeft:"auto",marginRight:"auto"}}}));e.default=function(){var t=x(),e=Object(s.useState)({visibility:!1,top:"0",left:"0",properties:{vision:"",founder:"",logo:"",position:{province:"",city:"",district:"",village:"",street:"",detailed:""}}}),r=Object(o.a)(e,2),a=r[0],p=r[1],u=Object(s.useState)(!1),d=Object(o.a)(u,2),j=d[0],f=(d[1],Object(s.useRef)()),g=Object(s.useRef)();return Object(s.useEffect)((function(){var t=1200,e=1e3,r={top:10,right:10,bottom:10,left:10},o=Object(l.d)(f.current).append("g").attr("transform","translate(".concat(r.top,", ").concat(r.left,")")),s=Object(l.a)().center([107,31]).scale(900).translate([t/2,e/2]),u=Object(l.b)().projection(s);function d(){return d=Object(i.a)(n.a.mark((function t(){var e,r,d;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(){return(d=Object(i.a)(n.a.mark((function t(){var e;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},t.prev=1,t.next=4,Object(l.c)("/Data/PublicWelfareCoordinates/data.geo.json");case 4:e=t.sent,t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",console.error(t.t0));case 10:o.selectAll("circle").data(e.points).enter().append("circle").attr("cx",(function(t){var e=t.geometry.coordinates;return s(e)[0]})).attr("cy",(function(t){var e=t.geometry.coordinates;return s(e)[1]})).attr("fill","blue").attr("class","point").attr("r",6).attr("d",u).on("mouseover",(function(t,e){t.path[0].setAttribute("r",12);var r=g.current.clientWidth,n=document.body.clientWidth-(t.pageX+3)-r<=0?t.pageX+3-r:t.pageX+3;return p(Object(c.a)(Object(c.a)({},a),{},{visibility:!0,top:t.pageY+8,left:n,properties:e.properties}))})).on("mouseout",(function(t,e){return t.path[0].setAttribute("r",6),p(Object(c.a)(Object(c.a)({},a),{},{visibility:!1}))}));case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)},r=function(){return d.apply(this,arguments)},e={},t.prev=3,t.next=6,Object(l.c)("/Map/ChinaData.geo.json");case 6:return e.map1=t.sent,t.next=9,Object(l.c)("/Map/data.ali.json");case 9:return e.map2=t.sent,t.next=12,Object(l.c)("/Map/data.jiangshukeji.json");case 12:e.map3=t.sent,t.next=18;break;case 15:return t.prev=15,t.t0=t.catch(3),t.abrupt("return",console.error(t.t0));case 18:o.selectAll("g").data(e.map1.features).enter().append("g").append("path").attr("d",u).attr("stroke","#d8d7d7").attr("stroke-width",1).attr("fill","white").append("title").text((function(t){return t.properties.name})),r();case 20:case"end":return t.stop()}}),t,null,[[3,15]])}))),d.apply(this,arguments)}!function(){d.apply(this,arguments)}()}),[j]),Object(b.jsx)("div",{id:"map",className:t.root,children:Object(b.jsxs)("div",{className:t.div,children:[Object(b.jsx)(h,{ref:g,card:a}),Object(b.jsx)("svg",{ref:f,viewBox:"0 0 1200 1000"})]})})}}}]);
//# sourceMappingURL=13.2a6d3079.chunk.js.map