import express from "express";
import router from "./router";

const port = 3000;
const server = express();

server.get("*", router);
server.use("/assets", express.static("assets"));
server.listen(port);

// eslint-disable-next-line
console.log(`Serving at http://localhost:${port}`);
