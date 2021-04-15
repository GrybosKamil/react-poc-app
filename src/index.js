import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
