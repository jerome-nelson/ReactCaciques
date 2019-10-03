const path = require("path");
const context = path.resolve(__dirname, "");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  context,
  module: {
    rules: [
      {
        exclude: [/(node_modules|bower_components|\.spec\.*$)/],
        include: /src/,
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            query: {
              plugins: [
                "transform-react-jsx",
                [
                  "react-css-modules",
                  {
                    context
                  }
                ]
              ]
            }
          },
          {
            loader: "eslint-loader"
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};
