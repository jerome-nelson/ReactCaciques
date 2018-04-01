const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const nodeExternals = require("webpack-node-externals");

module.exports = merge(common, {
  name: "Production Build: React SSR",
  entry: "./src/server",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "server.js",
    library: "app",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      components: path.resolve(__dirname, "..", "src/app/")
    }
  },
  target: "node",
  externals: [nodeExternals()],
  mode: "production"
});
