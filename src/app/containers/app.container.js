import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes";

class AppContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Switch>
        {routes.map((route, iteration) => (
          <Route key={`route-${iteration}`} {...route} />
        ))}
      </Switch>
    );
  }
}
export default AppContainer;
