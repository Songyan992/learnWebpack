let path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin");
let Webpack =require('webpack')
module.exports = {
	mode: 'production',
	entry: {
		home: "./src/home.js"
	},
	output: {
		filename: 'home.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html'
		}),
		new Webpack.DefinePlugin({
			DEV:JSON.stringify('production'),
			FLAG:'true',
			EXPORESSION:JSON.stringify("1+1")
		})
	],

	module: {
		rules: [
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
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