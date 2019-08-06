const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/assets/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 保证文件未改变则hash不变适用于生产环境
    new webpack.HashedModuleIdsPlugin()
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
