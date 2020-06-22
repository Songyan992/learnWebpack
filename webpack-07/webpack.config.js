let path=require('path');
let HtmlWebpackPlugin =require("html-webpack-plugin");

module.exports={
	mode:'production',
	entry:{
		home:"./src/home.js",
	},
	// 源码映射，会单独生成source map 文件，
	//出错了会单独列出错误的列和行
	// devtool:'source-map',//增加映射文件可以帮助我们调试源码
	//2)不会产生单独的文件，但是可以显示行和列
	// devtool:'eval-source-map',
	// 3)不会产生列，但是会又单独的映射文件 home.js.map
	// devtool:'cheap-module-source-map',
	//4)不会产生新的文件也不会产生列，集成在打包后的文件中
	devtool:'cheap-module-eval-source-map',
	output:{
		filename:'home.js',
		path:path.resolve(__dirname,'dist')
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './index.html',
			filename:'index.html'
		})
	],
	module:{
		rules:[
			{
				test:/\.js$/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['@babel/preset-env']
					}
				}
			}
		]
	}
}