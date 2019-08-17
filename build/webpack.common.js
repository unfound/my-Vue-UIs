const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 获取绝对路径
const resolve = dir => path.resolve(__dirname, '..', dir)
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    // 入口
    app: resolve('src/main.js')
  },
  resolve: {
    extensions: ['.js', 'vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    // 将定义过的规则应用到.vue文件中
    // https://vue-loader.vuejs.org/zh/guide/#手动设置
    new VueLoaderPlugin(),
    // 生成html
    new HtmlWebpackPlugin({
      title: 'myUI',
      favicon: resolve('public/favicon.ico'),
      template: resolve('public/index.html')
    })
  ],
  module: {
    // loader配置
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.css$/,
        /**
         * css-loader将css转成字符串并将字体图片等应用交给对应的loader处理
         * 然后再给style-loader处理成各种内联css
         * https://github.com/webpack-contrib/style-loader
         * postcss-loader可以给有兼容性问题的css加上前缀，配合autoprefixer使用
         */
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
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
        // 排除node_modules下的文件，但是需要将Vue单文件添加到白名单中
        // https://vue-loader.vuejs.org/zh/guide/pre-processors.html#babel
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  }
}
