// webpack 是node 写出来的 所以使用的时候，需要node语法
let path = require('path')
let HtmlWebpackPlugin = require("html-webpack-plugin")
let MiniCssExtractPlugin=require('mini-css-extract-plugin')
let OptimizeCss =require('optimize-css-assets-webpack-plugin')
let UglifyjsWebpackPlugin =require('uglifyjs-webpack-plugin')

module.exports = {
	optimization: {//优化，压缩
		minimizer: [
			new OptimizeCss(),
			new UglifyjsWebpackPlugin({
				cache: true,
				parallel: true,
				sourceMap:true
			})
		]
	},
	devServer: {// 开发服务器配置
		port: 3000,
		progress: true,
		contentBase: './dist',
		// compress: true//压缩
	},
	mode: 'production',//模式默认2种，production 生产模式,代码压缩，development 开发模式 代码不压缩
	entry: './src/index.js',//入口
	output: {//出口
		filename: 'bundle.js',//打包后的文件名 'bundle.[hash].js'//设置输出文件名是hash,每次都不一样。
		//'bundle.[hash:8].js' 设置8位的hash值
		path: path.resolve(__dirname, 'dist')//路径必须是一个绝对路径
	},
	plugins: [//数组，存放着所以的webpack 插件
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			// minify: {
			// 	removeAttributeQuotes: true,//删除属性双引号
			// 	collapseWhitespace: true,//折叠空行
			// },
			hash: true,//对引入文件名进行hash设置
		}),
		new MiniCssExtractPlugin({
			filename:'main.css'
		})
	],
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
					// {
					// 	loader: 'style-loader',//插入style标签中
					// 	options: {
					// 		//在html 插入自己的样式，在模块化样式在前面，自己定义的样式在后面，这样就可以使用自己定义的样式。
					// 		insert: function insertAtTop(element) {
					// 			var parent = document.querySelector('head');
					// 			var lastInsertedElement =
					// 				window._lastElementInsertedByStyleLoader;

					// 			if (!lastInsertedElement) {
					// 				parent.insertBefore(element, parent.firstChild);
					// 			} else if (lastInsertedElement.nextSibling) {
					// 				parent.insertBefore(element, lastInsertedElement.nextSibling);
					// 			} else {
					// 				parent.appendChild(element);
					// 			}

					// 			window._lastElementInsertedByStyleLoader = element;
					// 		},
					// 	},
					// },
					MiniCssExtractPlugin.loader,
					'css-loader',//@import 将css文件转为模块化文件，解析路径
					'postcss-loader'
				]
			},
			//匹配.less文件
			{
				test: /\.less$/,
				use: [
					// {
					// 	loader: 'style-loader',//插入style标签中
					// 	options: {
					// 		//在html 插入自己的样式，在模块化样式在前面，自己定义的样式在后面，这样就可以使用自己定义的样式。
					// 		insert: function insertAtTop(element) {
					// 			var parent = document.querySelector('head');
					// 			var lastInsertedElement =
					// 				window._lastElementInsertedByStyleLoader;

					// 			if (!lastInsertedElement) {
					// 				parent.insertBefore(element, parent.firstChild);
					// 			} else if (lastInsertedElement.nextSibling) {
					// 				parent.insertBefore(element, lastInsertedElement.nextSibling);
					// 			} else {
					// 				parent.appendChild(element);
					// 			}

					// 			window._lastElementInsertedByStyleLoader = element;
					// 		},
					// 	},
					// },
					MiniCssExtractPlugin.loader,
					'css-loader',//@import 将css文件转为模块化文件，解析路径
					'postcss-loader',
					'less-loader'//把less转为css
				]
			}
		]
	}
}   