## webpack 打包文件自动更新，不用手动刷新浏览器
安装webpack-dev-server，命令：yarn  add webpack-dev-server -D
执行命令：npx webpack-dev-server 

也可以在package.json的scripts里设置
"dev":"webpack-dev-server"
这样执行命令 npm run dev 即可

需要设置webpack.config.js
module.exports={
	devServer:{// 开发服务器配置
		port:3000,
		progress:true,
		contentBase:'./dist',
		compress:true//压缩
	},

安装html 插件：yarn add html-webpack-plugin -D
使用，在webpack.config.js中配置
let HtmlWebpackPlugin = require("html-webpack-plugin")
	plugins: [//数组，存放着所以的webpack 插件
		new HtmlWebpackPlugin({
			template: './src/index.html',/／将文件作为一个模版
			filename: 'index.html' //打包后输出的文件
		})
	]




