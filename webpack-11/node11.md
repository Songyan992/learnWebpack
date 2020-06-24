#### webpack 优化点

yarn add webpack webpack-cli html-webpack-plugin @babel/core babel-loader @babel/preset-env @babel/preset-react -D

1.引入第三方的库时候，不去加载第三方库的依赖，配置如下

		module: {
			noParse:/jquery/, //不去解析jquery下的依赖
		}

打包时间缩短：4720ms-> 2759ms

2.排除和只匹配的应用

	exclude:/mode_modules/,//排除mode_modules下的js
	include:path.resolve("src"),//只去匹配src目录下的js文件

3.第三方库的引入时，有时候会把第三方的全部代码引入，但是我们只用一个小小的功能，需要把其他功能忽略掉

安装：yarn add moment

安装启动服务：yarn add webpack-dev-server -D

使用：在.js中引入

	import moment from "moment";
	//只使用了一个方法，却是把整个moment 文件都引入了进来，这样的打包的代码包非常大，需要进行优化
	moment.locale('zh-cn')//设置为中文
	let r= moment().endOf('day').fromNow();
	console.log(r);

在webpack.config.js中配置：

	let Webpack = require("webpack")
	new Webpack.IgnorePlugin(/\.\/locale/,/moment/)

 1.37 MiB ->500 KiB

但是这个是使用	moment.locale('zh-cn')//设置为中文 没有效果

需要手动引入: import "moment/locale/zh-cn"

 1.37 MiB ->862 KiB


### webpack 动态连接库使用

yarn add react react-dom

使用：

	import React from "react"
	import {render} from "react-dom"
	render(<h1>jsx</h1>,window.root)

打包出来的文件大小为：976 KiB ，希望把第三方代码抽离处理

新建文件：webpack.config.react.js文件

	let path = require("path")
	let webpack =require("webpack")
	module.exports = {
		mode: 'development',
		// entry:'./src/test.js',
		// output:{
		// 	filename:'[name].js',
		// 	path:path.resolve(__dirname,"dist"),
		// 	library:'ab',
		// 	libraryTarget:'var'//commonJs var this ...
		// }

		entry: {
			react:['react','react-dom']
		},
		output: {
			filename: '_dll_[name].js',//产生的文件名
			path: path.resolve(__dirname, "dist"),
			library: '_dll_[name]',
			// libraryTarget: 'var'//commonJs var this ...
		},
		plugins:[
			new webpack.DllPlugin({
				name:'_dll_[name]',//name必须跟library对应，否找不到
				manifest:path.resolve(__dirname,'dist',"manifest.json")
			})
		]
	}
	

这样在dist文件夹下生成：_dll_react.js文件和mainifest.json文件

在webpack.config.js下配置：

	new Webpack.DllReferencePlugin({
		manifest:path.resolve(__dirname,'dist',"manifest.json")
	})

注意：一定要先执行：npx webpack --config webpack.config.react.js,确保已经生成了manifest.json文件

然后在执行：npm run build

打包后大小：976 KiB->6.49 KiB 