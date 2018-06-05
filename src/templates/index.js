export default (html, meta) => `
    <!DOCTYPE html>
    <html>
    <head>
        ${meta.title.toString()}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
    </head>
    <body>
        <div id="app">${html}</div>
    </body>
    </html>
`;
