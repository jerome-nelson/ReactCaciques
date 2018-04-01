import React from "react";
import ReactDOMServer from "react-dom/server";
import templateFn from "../templates";
import AppContainer from "../app/containers/app.container";
export default (req, res) => {
  const html = ReactDOMServer.renderToString(<AppContainer />);
  const template = templateFn(html);
  res.send(template);
};
