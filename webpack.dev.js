const path = require("path")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const webpack = require("webpack")
const {merge} = require("webpack-merge")
const common = require("./webpack.config.js")


module.exports = merge(common, {
  mode:"development",
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
    }),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ],
  //set up webpack server
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
  },
})