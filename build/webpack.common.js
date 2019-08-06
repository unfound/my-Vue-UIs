const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 获取绝对路径
const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports = {
  entry: {
    // 入口
    app: resolve('src/main.js')
  },
  plugins: [
    // 生成html
    new HtmlWebpackPlugin({
      title: 'myUI',
      favicon: resolve('static/favicon.ico'),
      template: resolve('static/index.html')
    })
  ],
  output: {
    // 出口
    filename: '[name].[contenthash].js',
    path: resolve('dist')
  },
  module: {
    // loader配置
    rules: [
      {
        test: /\.css$/,
        /**
         * css-loader将css转成字符串并将字体图片等应用交给对应的loader处理
         * 然后再给style-loader处理成各种内联css
         * https://github.com/webpack-contrib/style-loader
         */
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        /**
         * url-loader会自动调用file-loader输出对应的路径
         * https://github.com/webpack-contrib/url-loader#number
         */
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'url-loader'
        ]
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  }
}
