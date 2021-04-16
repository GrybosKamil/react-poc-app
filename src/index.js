import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.scss";
import AppContainer from "./AppContainer";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
