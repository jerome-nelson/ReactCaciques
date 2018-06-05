import express from "express";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import AppContainer from "../app/containers/app.container";
import templateFn from "../templates";

const port = 3000;
const server = express();

server.get("/", (req, res) => {
  const context = {};
  const html = renderToString(
    <StaticRouter context={context}>
      <AppContainer />
    </StaticRouter>
  );
  const helmet = Helmet.renderStatic();
  res.send(templateFn(html, helmet));
});
server.use("/assets", express.static("assets"));
server.listen(port);

// eslint-disable-next-line
console.log(`Serving at http://localhost:${port}`);
