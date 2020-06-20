## webpack css loader
直接在src的index.js中引入require("./index.css")，会报错

> ERROR in ./src/index.css 1:4
Module parse failed: Unexpected token (1:4)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
body{
|       background-color: aquamarine;
| }
 @ ./src/index.js 7:0-22


 ###  loader:就是将源代码进行转化称模块

 	module: {//模块
		//loader
		rules: [//规则 
			//css-loader 解析 @import这种语法
			//style-loader 把css插入到head的标签中
			// loder 的特点，单一处理
			// { test: /\.css$/, use: 'css-loader' } use只用一个的时候，就用字符串
			// 使用多个loader，use:[]定义为数组，执行顺序，从右向左,从下到上
			//loader还可以定义称对象的方式
			//use: {loader: 'css-loader',options: {//传递参数}}
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					'css-loader'
				]
			}
		]
	}


### css-loader style-loader
安装：yarn add css-loader style-loader -D

在webpack.config.js中配置

	module: {//模块
		//loader
		rules: [//规则 
			//css-loader 解析 @import这种语法
			//style-loader 把css插入到head的标签中
			// loder 的特点，单一处理
			// { test: /\.css$/, use: 'css-loader' } use只用一个的时候，就用字符串
			// 使用多个loader，use:[]定义为数组，执行顺序，从右向左,从下到上
			//loader还可以定义称对象的方式
			//use: {loader: 'css-loader',options: {//传递参数}}
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',//插入style标签中
						options: {
							// 方式1
							insert:'top'//在html 插入自己的样式，在模块化样式在前面，自己定义的样式在后面，这样就可以使用自己定义的样式。
							// 方式2
							// insert: function insertAtTop(element) {
							// 	var parent = document.querySelector('head');
							// 	var lastInsertedElement =
							// 		window._lastElementInsertedByStyleLoader;

							// 	if (!lastInsertedElement) {
							// 		parent.insertBefore(element, parent.firstChild);
							// 	} else if (lastInsertedElement.nextSibling) {
							// 		parent.insertBefore(element, lastInsertedElement.nextSibling);
							// 	} else {
							// 		parent.appendChild(element);
							// 	}

							// 	window._lastElementInsertedByStyleLoader = element;
							// },
						},
						
					},
					'css-loader',//@import 将css文件转为模块化文件，解析路径
				]
			}
		]
	}


### 设置 less 文件
yarn add less less-loader -D

	//匹配.less文件
		{
			test: /\.less$/,
			use: [
				{
					loader: 'style-loader',//插入style标签中
					options: {
						//在html 插入自己的样式，在模块化样式在前面，自己定义的样式在后面，这样就可以使用自己定义的样式。
						insert: function insertAtTop(element) {
							var parent = document.querySelector('head');
							var lastInsertedElement =
								window._lastElementInsertedByStyleLoader;

							if (!lastInsertedElement) {
								parent.insertBefore(element, parent.firstChild);
							} else if (lastInsertedElement.nextSibling) {
								parent.insertBefore(element, lastInsertedElement.nextSibling);
							} else {
								parent.appendChild(element);
							}

							window._lastElementInsertedByStyleLoader = element;
						},
					},
				},
				'css-loader',//@import 将css文件转为模块化文件，解析路径
				'less-loader'//把less转为css
			]
		}

### css 代码抽离插件 mini-css-extract-plugin

	<style>
		<link href=main.css?6276af3ad41926763544 rel=stylesheet>
	</style>
安装：yarn add mini-css-extract-plugin -D
配置：
let MiniCssExtractPlugin=require('mini-css-extract-plugin')

	module: {//模块
		//loader
		rules: [//规则 
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',//@import 将css文件转为模块化文件，解析路径
				]
			},
			//匹配.less文件
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',//@import 将css文件转为模块化文件，解析路径
					'less-loader'//把less转为css
				]
			}
		]
	}


### 自动加浏览器前缀  添加浏览器前缀 loader  autoprefixer

1. 安装: yarn add postcss-loader autoprefixer -D
2. 配置:

		module: {//模块
		//loader
		rules: [//规则 
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',//@import 将css文件转为模块化文件，解析路径
					'postcss-loader',
				]
			},
			//匹配.less文件
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',//@import 将css文件转为模块化文件，解析路径
					'postcss-loader',
					'less-loader'//把less转为css
				]
			}
		]
	}


3. 这时候运行会报错：
> ERROR in ./src/index.css (./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/index.css)
    Module build failed (from ./node_modules/postcss-loader/src/index.js):
    Error: No PostCSS Config found in: /Users/songyan/Desktop/study/vueStudy/webpack/learnWebpack/webpack-03/src
        at config.search.then (/Users/songyan/Desktop/study/vueStudy/webpack/learnWebpack/webpack-03/node_modules/postcss-load-config/src/index.js:91:15)  


4. 需要配置postcss.config.js
	module.exports={
	plugins:[
		require('autoprefixer')
	]
}

5. 还需要在package.json下面设置browserslist ，否则无效
	  "browserslist": [
    "last 1 version",
    "> 1%",
    "IE 10"
  ]

### 压缩生成的main.css文件 压缩css文件

安装：yarn add optimize-css-assets-webpack-plugin -D
需要配置
let OptimizeCss =require('optimize-css-assets-webpack-plugin')

	optimization: {//优化，压缩
		minimizer: [
			new OptimizeCss()
		]


mode: 'production', 否则.css文件不压缩
这样设置后，.css文件可以压缩，但是.js文件不压缩了，所以需要设置.js文件


### 压缩js uglifyjs-webpack-plugin

安装：yarn add uglifyjs-webpack-plugin -D
使用：
	optimization: {//优化，压缩
		minimizer: [
			new OptimizeCss(),
			new UglifyjsWebpackPlugin({
				cache: true,//是否缓存
				parallel: true,//是否多线程
				sourceMap:true
			})
		]
	},





