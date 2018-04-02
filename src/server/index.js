import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import AppContainer from "../app/containers/app.container";
import templateFn from "../templates";

const port = 3000;
const server = express();

server.get("/", (req, res) => {
  const html = renderToString(<AppContainer />);
  res.send(templateFn(html));
});
server.use("/assets", express.static("assets"));
server.listen(port);

// eslint-disable-next-line
console.log(`Serving at http://localhost:${port}`);
