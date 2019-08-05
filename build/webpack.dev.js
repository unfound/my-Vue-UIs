const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    port: 8080,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
