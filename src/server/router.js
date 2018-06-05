import React from "react";
import routes from "../app/routes";
import { matchPath, StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import AppContainer from "../app/containers/app.container";
import templateFn from "../templates";

export default function router(req, res) {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <AppContainer />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();

  const match = routes.reduce(
    (acc, route) =>
      matchPath(req.url, { path: route.path, exact: true }) || acc,
    null
  );

  if (!match) {
    res.status(404).send("Page Not Found");
    return;
  }

  return res.send(templateFn(html, helmet));
}
