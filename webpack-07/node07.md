### webpack 配置多入口 /配置source-map

yarn add webpack webpack-cli -D

多个入口配置时候会报错
	let path=require('path')
	module.exports={
		//多个入口
		entry:{
			home:"./src/home.js",
			other:"./src/other.js"
		},
		output:{
			filename:'bundle.js',
			path:path.resolve(__dirname,'dist')
		}
  } 	

> ERROR in chunk home [entry]
bundle.js
Conflict: Multiple assets emit to the same filename bundle.js

解决

	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'dist')
	}

yarn add html-webpack-plugin -D


### 配置source-map

yarn add @babel/core @babel/preset-env babel-loader webpack-dev-server -D

<!-- console.lo is not a function -->

查找错误文件

配置：
>//1）源码映射，会单独生成source map 文件，
//出错了会单独列出错误的列和行
devtool:'source-map',//增加映射文件可以帮助我们调试源码
会产生单独文件：home.js.map

>	//2)不会产生单独的文件，但是可以显示行和列
devtool:'eval-source-map',

>	// 3)不会产生列，但是会又单独的映射文件 home.js.map
devtool:'cheap-module-source-map',//产生后可以保留起来，用于调试

>	//4)不会产生新的文件也不会产生列，集成在打包后的文件中
devtool:'cheap-module-eval-source-map'