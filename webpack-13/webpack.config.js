let path = require("path")
let HtmlWebpackPlugin = require('html-webpack-plugin')
// let Happypack = require("happypack")

let Webpack = require("webpack")
module.exports = {
	// entry: './src/index.js',
	entry:{
		index:'./src/index.js',
	},
	output: {
		// filename: 'bundle.js',
		filename: '[name].js',
		path: path.resolve(__dirname, "dist")
	},


	devServer: {
		hot:true,
		port: 3000,
		open: true,
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new Webpack.NamedModulesPlugin({}),//哪个模块需要热更新
		new Webpack.HotModuleReplacementPlugin({})////热更新插件
	],
	mode: 'production',
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

