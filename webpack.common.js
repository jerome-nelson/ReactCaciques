const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        exclude: [/(node_modules|bower_components|\.spec\.*$)/],
        include: /src/,
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "eslint-loader"
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insertAt: "top"
            }
          },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(path.resolve(__dirname, "dist"))]
};
