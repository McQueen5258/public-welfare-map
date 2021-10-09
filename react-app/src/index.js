import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    {/* 
      // TODO 后续可以考虑添加加载页面
    */}
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);