const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  name: "Production Build: React SSR",
  entry: "./src/server/server-setup.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./index.js"
  },
  target: "node",
  externals: [nodeExternals()],
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/templates/index.html",
      filename: "index.html"
    })
  ]
});
