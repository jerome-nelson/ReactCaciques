import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import "./styles/critical.scss";

hydrate(
  <Router>
    <Switch>
      {routes.map((route, iteration) => (
        <Route key={`route-${iteration}`} {...route} />
      ))}
    </Switch>
  </Router>,
  document.getElementById("root")
);
