const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: "babel-loader",
        },
        // options: {
        //   presets: ['@babel/preset-react'],
        //   //plugins: ['syntax-dynamic-import', 'transform-class-properties'],
        // },
        //---> babel.config.json
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader ,
          "css-loader" ,
          "sass-loader" ,
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,  "css-loader" ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // 8KB
            },
          } 
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
            { 
              loader: "url-loader", 
              options: { 
                  limit: 100000 
                } 
            }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/base.html"
    }),
    new MiniCssExtractPlugin({
      filename: "main.[hash].css"
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      name: "vendor",
    },
  },
}