import path from "path";
import webpack from "webpack";
import CleanWebpackPlugin from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

module.exports = {
  devServer: {
    contentBase: "./dist"
  },
  entry: {
    app: [path.resolve(__dirname, "./src/app/index.js")],
    vendors: ["react", "react-dom"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./bundles/bundle.[name].js"
  },
  module: {
    rules: [
      {
        exclude: [/(node_modules|bower_components)/],
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
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, "dist")),
    new HtmlWebpackPlugin({
      template: "src/templates/index.html",
      filename: "index.html"
    })
  ]
};
