const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: ['style-loader', 'css-loader'],
    }, {
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'img/[name].[hash:7].[ext]',
      },
    }, {
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  devServer: {
    contentBase: './build',
    port: 8081, // 端口号
    inline: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      template: 'public/index.html',
    }),
  ],
}
