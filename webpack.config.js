const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  //recreating what webpack does by default.
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
module.exports = config;
