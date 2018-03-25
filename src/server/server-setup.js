import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import AppContainer from "../app/containers/app.container";

export const html = () => {
  const comp = renderToStaticMarkup(<AppContainer />);
  return renderToStaticMarkup(`<!doctype html>
  <html lang="en">
  
  <head>
      <meta charset="utf-8">
      <title>Webpack App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  
  <body>
      <div id="root">${comp}</div>
  </body>
  
  </html>`);
};
