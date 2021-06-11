const path = require('path')


module.exports = {
  entry: {
    bundle: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            // plugins: ['syntax-dynamic-import', 'transform-class-properties'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 8KB
            },
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
            { 
              loader: 'url-loader', 
              options: { 
                  limit: 100000 
                } 
            }
        ],
      },
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor',
    },
  },
}