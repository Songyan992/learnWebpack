let path=require('path');
let HtmlWebpackPlugin =require("html-webpack-plugin");

module.exports={
	mode:'development',
	//多个入口
	entry:{
		home:"./src/home.js",
		other:"./src/other.js"
	},
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'dist')
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './index.html',
			filename:'home.html',
			chunks:['home']
		}),
		new HtmlWebpackPlugin({
			template: './index.html',
			filename:'other.html',
			chunks:['other']
		})
	]
}