import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { auth } from "fbase";

console.log(auth); // test용

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
