export default (html, meta, injectStyles) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        ${meta ? meta.title.toString() : ""}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        ${injectStyles ? "<style>" + injectStyles + "</style>" : ""}
        <link rel="stylesheet" href="main.css" />
    </head>
    <body>
        <div id="app">${html}</div>
    </body>
    </html>
`;
};
