### webpack 设置环境

#### 方式1

	plugins: [
		new Webpack.DefinePlugin({
			DEV:'dev'
		})
	],

报错 ：home.js:2 Uncaught ReferenceError: dev is not defined

解决
		
	DEV:"'dev'"


在webpack.config.js  中定义的，在.js文件中可以直接使用

	new Webpack.DefinePlugin({
		DEV:JSON.stringify('production'),
		FLAG:'true',
		EXPORESSION:JSON.stringify("1+1")
	})

.js 文件

	console.log(typeof FLAG);
	console.log(EXPORESSION);


#### 方式2

分别新建2个文件，webpack.prod.js和webpack.dev.js，把webpack.config.js改为webpack.base.js

还需要安装插件： yarn add webpack-merge -D

配置webpack.dev.js文件

	let {smart} =require("webpack-merge")
	let base = require("./webpack.base.js")

	module.exports=smart(base,{
		mode:"development"
	})

运行：npm run build -- --config webpack.dev.js


配置webpack.prod.js文件

	let {smart} =require("webpack-merge")
	let base = require("./webpack.base.js")

	module.exports=smart(base,{
		mode:"production"
	})

运行：npm run build -- --config webpack.prod.js

一个控制开发，一个控制生产，分别配置，彻底分开环境配置
