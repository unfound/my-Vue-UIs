const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 获取绝对路径
const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
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
    new webpack.NamedChunksPlugin(),
    // 直接不处理，复制static路径下的文件到dist下
    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: ''
      }
    ])
  ]
})
