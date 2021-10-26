import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
