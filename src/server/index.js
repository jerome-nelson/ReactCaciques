import express from "express";
import router from "./router";

const port = 3000;
const server = express();

server.use(express.static("public"));
server.use(express.static("dist"));
server.get("/*(.html|.htm)?/", (req, res) => {
  router(req, res);
});
server.listen(port);

// eslint-disable-next-line
console.log(`Serving at http://localhost:${port}`);
