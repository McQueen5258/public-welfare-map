import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
const App = lazy(() => import("./App"));

/*
 * // TODO 后续可以考虑添加加载页面
 */
ReactDOM.render(
  // <React.StrictMode>
  <Suspense fallback={<div></div>}>
    <App />
  </Suspense>,
  // </React.StrictMode>
  document.getElementById("root")
);
