const path = require('path');

const config = {
  //recreating what webpack does by default.
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }]
  }
};
module.exports = config;
