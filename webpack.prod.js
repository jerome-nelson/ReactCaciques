const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const common = require("./webpack.common.js");
const nodeExternals = require("webpack-node-externals");

module.exports = merge(common, {
  name: "Production Build: React SSR",
  entry: "./src/server",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "server.js",
    library: "app",
    libraryTarget: "commonjs2"
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css"
    })
  ],
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
