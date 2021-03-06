import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withStyles } from "react-critical-css";
import routes from "../routes";
import s from "../critical.scss";
import NavigationMenu from "../components/navigation.component";

class AppContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main>
        <NavigationMenu links={routes} />
        <Switch>
          {routes.map((route, iteration) => {
            return (
              <Route
                key={`route-${iteration}`}
                exact
                render={props => {
                  const { title, schema, meta } = route;
                  const routeProps = {
                    title,
                    schema,
                    meta
                  };
                  return <route.component {...routeProps} {...props} />;
                }}
                path={route.path}
              />
            );
          })}
        </Switch>
      </main>
    );
  }
}

export default withStyles(s)(AppContainer);
