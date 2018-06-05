const express = require("express");
const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  name: "Development Configuration",
  entry: {
    app: [path.resolve(__dirname, "./src/app/index.js")],
    vendors: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./bundles/bundle.[name].js"
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
    setup(app) {
      app.use("/assets", express.static("assets"));
    },
    watchContentBase: true
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/templates/index.html",
      filename: "index.html"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
