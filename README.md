# VUE组件搭建步骤

> 首先 ```npm init``` 初始化目录，然后 ```npm i --save-dev webpack webpack-cli```安装webpack以及命令工具
---
> 然后是安装eslint进行代码检查规范，直接```npx eslint --init```然后跟随提示就可以安装所需要的依赖也可手动安装。standard规范参考[standard规范](https://www.npmjs.com/package/eslint-config-standard)以及vue的[eslint插件](https://eslint.vuejs.org/user-guide/#editor-integrations)
---
> 创建webpack的配置文件,配置入口和出口。```npm i -save-dev style-loader css-loader```安装css处理loader并在module中配置rules。安装并配置file-loader以及url-loader处理图片和字体等依赖。
---
> 安装并配置html-webpack-plugin用来自动生成HTML文件，安装并配置clean-webpack-pugin用来清除旧的dist(这里注意，新版clean插件用法与官网指南上略有不同)
---
> 安装并配置webpack-dev-server用来做本地开发服务器并[配置HMR](https://webpack.docschina.org/guides/hot-module-replacement/#启用-hmr)，过程中遇到了按照官网步骤配置却怎么都不能开启HMR的情况，最后重装了依赖就解决了。
---
> 安装webpack-merge进行生产环境以及开发环境的[分别配置](https://webpack.docschina.org/guides/production/#配置)。
---
> ```npm i --save-dev babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime```安装babel所需的所有依赖来将es6以上的js语法转化为es5甚至更低版本以适应不同浏览器的兼容问题。顺便安装eslint-loader用以检查js语法规范。可参考[babel配置](https://webpack.docschina.org/loaders/babel-loader/)
---
> 配置代码分离以及缓存，将公用依赖代码分离到独立模块中可以减少代码体积而且有助于浏览器的缓存，参考[代码分离](https://webpack.docschina.org/guides/code-splitting/)和[缓存](https://webpack.docschina.org/guides/caching/)
