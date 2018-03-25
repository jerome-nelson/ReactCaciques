import React from "react";
import { hydrate } from "react-dom";
import AppContainer from "./containers/app.container";

hydrate(<AppContainer />, document.getElementById("root"));
