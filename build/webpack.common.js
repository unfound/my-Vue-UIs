const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = dir => path.resolve(__dirname, '..', dir)

module.exports = {
  entry: {
    app: resolve('src/main.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'myUI',
      favicon: resolve('static/favicon.ico'),
      template: resolve('static/index.html')
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
