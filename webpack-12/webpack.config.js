let path = require("path")
let HtmlWebpackPlugin = require('html-webpack-plugin')
// let Happypack = require("happypack")

let Webpack = require("webpack")
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, "dist")
	},
	devServer: {
		port: 3000,
		open: true,
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new Webpack.IgnorePlugin(/\.\/locale/, /moment/),
		new Webpack.DllReferencePlugin({
			manifest: path.resolve(__dirname, 'dist', "manifest.json")
		}),
		// new Happypack({
		// 	id: 'js',
		// 	use: [
		// 		{
		// 			loader: 'babel-loader',
		// 			options: {
		// 				presets: [
		// 					"@babel/preset-env",
		// 					"@babel/preset-react"
		// 				]
		// 			}
		// 		}
		// 	]
		// })
	],
	mode: 'development',
	module: {
		noParse: /jquery/,//不去解析jquery下的依赖包
		rules: [
			{
				test: /\.js$/,
				exclude: /mode_modules/,//排除mode_modules下的js
				include: path.resolve("src"),//只去匹配src目录下的js文件
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react"
						]
					}
				}
				// use: "Happypack/loader?id=js"
			},
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			}
		]
	}
}

