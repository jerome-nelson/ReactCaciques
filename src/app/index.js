import React from "react";
import { hydrate } from "react-dom";
import AppContainer from "./containers/app.container";
import "../styles/critical.scss";

hydrate(<AppContainer />, document.getElementById("root"));
