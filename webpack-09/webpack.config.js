let path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin");

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
		})
	],
	// devServer:{
	// 	proxy:{
	// 		"/api":'http://localhost:3000'//配置一个代理
	// 	}
	// },
	devServer:{
		// 方式1:
		// proxy:{//配置一个代理
		// 	"/api":{
		// 		target:'http://localhost:3000',
		// 		pathRewrite:{
		// 			'/api':''
		// 		}

		// 	}
		// }

		// 2. 前端只想单纯来模拟数据
		before(app){//提供的钩子
			app.get('/user',(req,res)=>{
				res.json({name:'aaa--before'})
			})
		}
	},
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
}