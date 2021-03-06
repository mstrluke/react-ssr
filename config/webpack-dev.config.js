const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack-base.config');


module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(process.cwd(), './public/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(
        dotenv.config({
          path: path.resolve(process.cwd(), './.env.dev')
        }).parsed
      )
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(process.cwd(), './build'),
    historyApiFallback: true,
    compress: true,
    port: process.env.APP_PORT,
    hot: true,
  }
});
