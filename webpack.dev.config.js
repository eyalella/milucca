const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const config = require('./webpack.config');

module.exports = merge(config, {
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'client')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
