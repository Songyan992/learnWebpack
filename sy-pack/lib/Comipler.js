let fs = require('fs')
let path = require('path')
let babylon = require('babylon')
let t = require('@babel/types')
let traverse = require('@babel/traverse').default
let generator = require("@babel/generator").default

//babylon 主要是把源码转换成ast
//@babel/traverse。主要是遍历节点
//@babel/types 替换节点
//@babel/generator 替换好的节点生成新的code

class Comipler {
	constructor(config) {
		//entry output
		this.config = config
		//需要保存入口文件的路径
		this.entryId;//'./src/index.js'
		//需要保存所有模块依赖
		this.modules = {};
		this.entry = config.entry//入口路径
		this.root = process.cwd()//  当前文件的工作路径
	}
	run() {
		//执行，并创建依赖关系
		this.buildModule(path.resolve(this.root, this.entry), true)
		console.log(this.modules);
		console.log(this.entryId);
		
		// 发射一个打包后的文件
		this.emitFile()
	}

	getSource(modulePath) {
		let content = fs.readFileSync(modulePath, 'utf-8')
		return content
	}
	buildModule(modulePath, isEntry) {
		//拿到模块内容
		let source = this.getSource(modulePath)
		//模块ID modulePath=modulePath-this.root
		let moduleName = './' + path.relative(this.root, modulePath)
		if (isEntry) {
			this.entryId = moduleName//保存入口名字
		}
		// console.log(source,moduleName);
		//  解析需要把sourse 源码进行改造，返回一个依赖列表
		let { sourceCode, dependencies } = this.parse(source, path.dirname(moduleName))//.src
		// console.log(sourceCode);
		// console.log(dependencies);
		//把相对路径和模块中内容对应起来
		this.modules[moduleName] = sourceCode

		dependencies.forEach((dep=>{//附属模块 的递归加载
			this.buildModule(path.join(this.root,dep),false)
		}));
	}

	//解析源码
	parse(source, parentPath) {//ast解析语法树
		// console.log(source,parentPath);
		let ast = babylon.parse(source)
		let dependencies = [];
		traverse(ast, {
			CallExpression(p) {
				let node = p.node;
				if (node.callee.name === 'require') {
					node.callee.name = "__webpack_require__";
					let moduleName = node.arguments[0].value;
					moduleName = moduleName + (path.extname(moduleName) ? '' : '.js')
					moduleName = './' + path.join(parentPath, moduleName); 'src/a.js'
					dependencies.push(moduleName)
					node.arguments = [t.stringLiteral(moduleName)]
				}
			}
		});
		let sourceCode = generator(ast).code

		return { sourceCode, dependencies }
	}
	emitFile() {
		//用对象渲染模版
	}
}

module.exports = Comipler