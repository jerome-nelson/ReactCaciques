const express = require("express");
const app = express();

app.use(express.static("dist"));

// eslint-disable-next-line no-console
app.listen(3000, () => console.log("Listening on 3000"));
