(this["webpackJsonppublic-welfare"]=this["webpackJsonppublic-welfare"]||[]).push([[7],{160:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(88),o=n(19),i=n(21),c=n(13),u=n(11),l=(n(14),n(16)),s=n(184),p=n(23),m=n(189),d=n(22),b=n(17),h=n(20),g=n(34),v=n(30),f=n(185),y=n(186);function j(e){return Object(f.a)("MuiLink",e)}var O=Object(y.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),w=n(1),x=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],T={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=Object(b.a)(a.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["underline".concat(Object(d.a)(n.underline))],"button"===n.component&&t.button]}})((function(e){var t=e.theme,n=e.ownerState,r=Object(p.b)(t,"palette.".concat(function(e){return T[e]||e}(n.color)))||n.color;return Object(u.a)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?Object(m.a)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&Object(i.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(O.focusVisible),{outline:"auto"}))})),B=r.forwardRef((function(e,t){var n=Object(h.a)({props:e,name:"MuiLink"}),a=n.className,i=n.color,p=void 0===i?"primary":i,m=n.component,b=void 0===m?"a":m,f=n.onBlur,y=n.onFocus,O=n.TypographyClasses,T=n.underline,B=void 0===T?"always":T,N=n.variant,W=void 0===N?"inherit":N,k=Object(c.a)(n,x),R=Object(g.a)(),A=R.isFocusVisibleRef,M=R.onBlur,C=R.onFocus,E=R.ref,F=r.useState(!1),L=Object(o.a)(F,2),D=L[0],V=L[1],z=Object(v.a)(t,E),H=Object(u.a)({},n,{color:p,component:b,focusVisible:D,underline:B,variant:W}),J=function(e){var t=e.classes,n=e.component,r=e.focusVisible,a=e.underline,o={root:["root","underline".concat(Object(d.a)(a)),"button"===n&&"button",r&&"focusVisible"]};return Object(s.a)(o,j,t)}(H);return Object(w.jsx)(S,Object(u.a)({className:Object(l.a)(J.root,a),classes:O,color:p,component:b,onBlur:function(e){M(e),!1===A.current&&V(!1),f&&f(e)},onFocus:function(e){C(e),!0===A.current&&V(!0),y&&y(e)},ref:z,ownerState:H,variant:W},k))})),N=n(199),W=Object(N.a)((function(e){return{root:{textAlign:"center",paddingTop:"6.5612792969em",paddingBottom:"1.1008em"},title:{fontFamily:"Nocturno Display",fontSize:"5.2490234375em",letterSpacing:"-.03em",paddingTop:".07em",lineHeight:"1.25",margin:".5636096em 0"},subtitle:{fontFamily:"Nocturno Display",fontSize:".88064em",width:"29.1579559669em",maxWidth:"calc(100vw - 8.39844em)",lineHeight:"1.72em",margin:"1.376em auto"},aboutNav:{margin:"2.15em auto",display:"flex",flexFlow:"column nowrap",justifyContent:"flex-start",alignItems:"center",width:"20.0234353542em",maxWidth:"100%",transition:"width .3s ease",borderTop:"1px solid #eaeaea",paddingTop:"1.1008em"},aboutA:{fontWeight:"500",fontSize:".704512em",letterSpacing:".2em",textAlign:"center",textTransform:"uppercase"}}}));t.default=function(){var e=W();return Object(w.jsxs)("header",{className:e.root,children:[Object(w.jsx)(a.a,{variant:"h1",className:e.title,children:"To Serve Better"}),Object(w.jsx)(a.a,{className:e.subtitle,align:"center",variant:"",children:"Stories of people committed to public purpose and to making a positive difference in communities throughout the country."}),Object(w.jsx)("nav",{className:e.aboutNav,children:Object(w.jsx)(B,{className:e.aboutA,href:"",children:"ABOUT THE PROJECT"})})]})}},34:function(e,t,n){"use strict";var r=n(0),a=!0,o=!1,i=null,c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function u(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function l(){a=!1}function s(){"hidden"===this.visibilityState&&o&&(a=!0)}function p(e){var t=e.target;try{return t.matches(":focus-visible")}catch(n){}return a||function(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!c[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}t.a=function(){var e=r.useCallback((function(e){var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",u,!0),t.addEventListener("mousedown",l,!0),t.addEventListener("pointerdown",l,!0),t.addEventListener("touchstart",l,!0),t.addEventListener("visibilitychange",s,!0))}),[]),t=r.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!p(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&(o=!0,window.clearTimeout(i),i=window.setTimeout((function(){o=!1}),100),t.current=!1,!0)},ref:e}}},88:function(e,t,n){"use strict";var r=n(13),a=n(11),o=n(0),i=(n(14),n(16)),c=n(196),u=n(184),l=n(17),s=n(20),p=n(22),m=n(185),d=n(186);function b(e){return Object(m.a)("MuiTypography",e)}Object(d.a)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=n(1),g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=Object(l.a)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat(Object(p.a)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(e){var t=e.theme,n=e.ownerState;return Object(a.a)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=o.forwardRef((function(e,t){var n=Object(s.a)({props:e,name:"MuiTypography"}),o=function(e){return y[e]||e}(n.color),l=Object(c.a)(Object(a.a)({},n,{color:o})),m=l.align,d=void 0===m?"inherit":m,j=l.className,O=l.component,w=l.gutterBottom,x=void 0!==w&&w,T=l.noWrap,S=void 0!==T&&T,B=l.paragraph,N=void 0!==B&&B,W=l.variant,k=void 0===W?"body1":W,R=l.variantMapping,A=void 0===R?f:R,M=Object(r.a)(l,g),C=Object(a.a)({},l,{align:d,color:o,className:j,component:O,gutterBottom:x,noWrap:S,paragraph:N,variant:k,variantMapping:A}),E=O||(N?"p":A[k]||f[k])||"span",F=function(e){var t=e.align,n=e.gutterBottom,r=e.noWrap,a=e.paragraph,o=e.variant,i=e.classes,c={root:["root",o,"inherit"!==e.align&&"align".concat(Object(p.a)(t)),n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return Object(u.a)(c,b,i)}(C);return Object(h.jsx)(v,Object(a.a)({as:E,ref:t,ownerState:C,className:Object(i.a)(F.root,j)},M))}));t.a=j}}]);
//# sourceMappingURL=7.53217e31.chunk.js.map