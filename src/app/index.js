import React from "react";
import { createStore } from "redux";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "./containers/app.container";

const store = createStore(() => ({}));

hydrate(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
