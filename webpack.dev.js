const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  devServer: {
    contentBase: "./dist",
    hot: true
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
