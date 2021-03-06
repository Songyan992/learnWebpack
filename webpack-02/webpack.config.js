// webpack 是node 写出来的 所以使用的时候，需要node语法
let path = require('path')
let HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	devServer: {// 开发服务器配置
		port: 3000,
		progress: true,
		contentBase: './dist',
		compress: true//压缩
	},
	mode: 'production',//模式默认2种，production 生产模式,代码压缩，development 开发模式 代码不压缩
	entry: './src/index.js',//入口
	output: {//出口
		filename: 'bundle.[hash:8].js',//打包后的文件名 'bundle.[hash].js'//设置输出文件名是hash,每次都不一样。
		//'bundle.[hash:8].js' 设置8位的hash值
		path: path.resolve(__dirname, 'dist')//路径必须是一个绝对路径
	},
	plugins: [//数组，存放着所以的webpack 插件
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			minify:{
				removeAttributeQuotes:true,//删除属性双引号
				collapseWhitespace:true,//折叠空行
			},
			hash:true//对引入文件名进行hash设置

		})
	]
}   