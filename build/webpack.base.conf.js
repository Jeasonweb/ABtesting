var path = require('path')
var utils = require('./utils')
var config = require('../config')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    // reactx: ["react", "react-dom", "react-router-dom", "react-redux", "redux", "redux-saga"], 
    // g2: ['g2','g2-react'],
    app: './src/main.js',
    vendor: ['g2', 'g2-react']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    chunkFilename : '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: [
          'babel-loader',
          // 解决 css-modules 模式下 hmr 不生效的问题 Good
          'webpack-module-hot-accept'
        ],
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
