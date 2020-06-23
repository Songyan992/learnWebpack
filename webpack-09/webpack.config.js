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