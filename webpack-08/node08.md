### webpack watch用法

watch作用：实时监听build编译后的代码

配置：	

  watch:true,
  watchOptions:{//监控选项
		poll:1000,//每秒监控一次
		aggregateTimeout:500,//防抖，一直输入代码，不能一直监控
		ignored:/node_modules/   //忽略监控文件
	}

npm run build :webpack is watching the files…


### webpack 小插件

1.cleanWebpackPlugin

先删除之前的dist目录，创建新的dist

安装：yarn add clean-webpack-plugin -D

配置：

  let { CleanWebpackPlugin } = require('clean-webpack-plugin');
	plugins: [
		new CleanWebpackPlugin()
	]

2.copyWebpackPlugin:将文件copy到dist文件目录下

安装：yarn add copy-webpack-plugin -D

使用： 

  let CopyWebpackPlugin=require("copy-webpack-plugin")
	new CopyWebpackPlugin({
		patterns:[
			{from:'test',to:"./"}
		]
	})

3.bannerPlugin //内置 版权申明插件

使用

  let Webpack =require("webpack")
	new Webpack.BannerPlugin("make 2020 by songyan")

会在打包出来的.js文件顶部插入 /*! make 2020 by songyan */

