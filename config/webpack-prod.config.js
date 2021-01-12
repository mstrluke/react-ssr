const dotenv = require('dotenv');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const base = require('./webpack-base.config');


module.exports = merge(base, {
  mode: 'production',
  devtool: 'source-map',
  optimization: Object.assign(base.optimization, {
    minimize: true,
  }),
  plugins: base.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }),
  ])
});
