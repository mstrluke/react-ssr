const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


module.exports = {
  target: 'web',
  entry: {
    app: path.resolve(process.cwd(), './src/client.js'),
    vendors: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(process.cwd(), './build'),
    publicPath: '/'
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: 'asset-manifest.json',
      publicPath: '/',
      generate: (seed, files) => {
        const manifestFiles = files.reduce(function (manifest, file) {
          manifest[file.name] = file.path
          return manifest
        }, seed)

        return manifestFiles;
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(process.cwd(), './public'),
          to: path.resolve(process.cwd(), './build'),
          filter: file => !file.includes('index.html'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(process.cwd(), './src'),
        loader: 'babel-loader',
      },
      {
        loader: require.resolve('file-loader'),
        exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    chunkIds: 'named',
    splitChunks: {
      chunks: 'async',
    },
  },
}