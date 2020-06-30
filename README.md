# learnWebpack
Webpack 学习笔记和相关代码
## webpack-01 
基本的安装，配置，具体看笔记

## webpack-02
自动更新webpack-dev-server 配置
webpack plugins配置：HtmlWebpackPlugin， html作为插件配置 

## webpack-03
style-loader  css-loader  less-loader 
css 代码抽离插件 mini-css-extract-plugin
添加浏览器前缀 yarn add postcss-loader         autoprefixer
压缩css文件 optimize-css-assets-webpack-plugin
压缩js uglifyjs-webpack-plugin

## webpack-04 es6转es5 js高级语法配置
这一个目录开始，设置忽略文件.gitignore，减少上传文件，使用的时候，可以 先 yarn  ，根据package.json自行安装依赖包
然后在 npm run  build 生成dist的编译后文件 ，然后在npm run dev ,实时监听改变的文件

## webpack-05 第三方配置 jQuery,全局变量引入问题
安装：yarn add jquery  

jquery  ->$

## webpack-06 webpack 文件／图片打包 ／文件分类

打包图片：file-loader url-loader html-withimg-loader

打包文件分类：具体看node06

## webpack-07 webpack 多文件打包，多入口，source-map 配置
webpack.config多入口配置.js 

webpack.config.js source-map配置

## webpack-08 watch用法 和一些小插件

watch:实时监听build编译后的代码

cleanWebpackPlugin:先删除之前的dist目录，创建新的dist

copyWebpackPlugin:将文件copy到dist文件目录下

bannerPlugin:版权申明插件

## webpack-09 webpack跨域

配置跨域 devServer

设置resolve :设置别名，设置默认后缀等


## webpack-10 webpack 环境设置

设置生产环境和开发环境，具体看node10.md

## webpack-11 webpack 优化／多线程打包／动态连接库的使用

具体看node11.md的笔记

## webpack-12 webpack 公共代码抽离

抽离公共自己写的代码， 抽离第三方引入的库 jquery等


## webpack-13 webpack  懒加载和热更新

## webpack-14 webpack  tapable 同步钩子和异步钩子