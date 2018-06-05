import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./containers/app.container";
// import "./styles/critical.css";

hydrate(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById("root")
);
