import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./containers/app.container";

hydrate(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById("root")
);
