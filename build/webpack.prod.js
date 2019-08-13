process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 获取绝对路径
const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports = merge(common, {
  mode: 'production',
  output: {
    // 出口
    filename: '[name].[contenthash].js',
    chunkFilename: '[contenthash].js',
    publicPath: '/assets/',
    path: resolve('dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[contenthash].css'
    }),
    // 保证文件未改变则hash不变适用于生产环境
    new webpack.HashedModuleIdsPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: ''
      }
    ])
  ],
  optimization: {
    // 将runtime代码拆分为一个单独的chunk
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        // 将node_modules下的依赖全都打包到一个文件里
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
})
