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
    // 开启HRM
    new webpack.HotModuleReplacementPlugin(),
    // 开发环境可以显示打包文件所在文件夹，执行时间较长
    new webpack.NamedChunksPlugin()
  ]
})
