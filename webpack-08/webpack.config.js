let path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin");
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let CopyWebpackPlugin=require("copy-webpack-plugin");
let Webpack =require("webpack")

module.exports = {
	mode: 'production',
	entry: {
		home: "./src/home.js"
	},
	output: {
		filename: 'home.[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html'
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns:[
				{from:'test',to:"./"}
			]
		}),
		new Webpack.BannerPlugin("make 2020 by songyan")
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
	// watch:true,
	// watchOptions:{//监控选项
	// 	poll:1000,//每秒监控一次
	// 	aggregateTimeout:500,//防抖，一直输入代码，不能一直监控
	// 	ignored:/node_modules/   //忽略监控文件
	// }
}