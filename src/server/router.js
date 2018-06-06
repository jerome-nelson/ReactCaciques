import React from "react";
import routes from "../app/routes";
import { matchPath, StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { CriticalCSSProvider, StyleRegistry } from "react-critical-css";
import AppContainer from "../app/containers/app.container";
import templateFn from "../templates";

export default function router(req, res) {
  const styleRegistry = new StyleRegistry();
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <CriticalCSSProvider registry={styleRegistry}>
        <AppContainer />
      </CriticalCSSProvider>
    </StaticRouter>
  );
  const criticalCSS = styleRegistry.getCriticalCSS();
  const helmet = Helmet.renderStatic();
  const match = routes.reduce(
    (acc, route) =>
      matchPath(req.url, { path: route.path, exact: true }) || acc,
    null
  );

  if (!match) {
    res.status(404).send(templateFn("<h1>Page Not Found</h1>", null, null));
    return;
  }

  return res.send(templateFn(html, helmet, criticalCSS));
}
