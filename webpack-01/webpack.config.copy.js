// webpack 是node 写出来的 所以使用的时候，需要node语法
let path= require('path')
module.exports={
	mode:'development',//模式默认2种，production 生产模式，development 开发模式
	entry:'./src/index.js',//入口
	output:{//出口
		filename:'bundle.js',//打包后的文件名
		path:path.resolve(__dirname,'dist')//路径必须是一个绝对路径

	}
}   