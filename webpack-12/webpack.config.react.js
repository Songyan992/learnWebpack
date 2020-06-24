let path = require("path")
let webpack =require("webpack")
module.exports = {
	mode: 'development',
	// entry:'./src/test.js',
	// output:{
	// 	filename:'[name].js',
	// 	path:path.resolve(__dirname,"dist"),
	// 	library:'ab',
	// 	libraryTarget:'var'//commonJs var this ...
	// }

	entry: {
		react:['react','react-dom']
	},
	output: {
		filename: '_dll_[name].js',//产生的文件名
		path: path.resolve(__dirname, "dist"),
		library: '_dll_[name]',
		// libraryTarget: 'var'//commonJs var this ...
	},
	plugins:[
		new webpack.DllPlugin({
			name:'_dll_[name]',//name必须跟library对应，否找不到
			path:path.resolve(__dirname,"dist","manifest.json")
		})
	]
}