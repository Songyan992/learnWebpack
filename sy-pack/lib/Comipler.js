class Comipler{
	constructor(config){
		//entry output
		this.config=config
		//需要保存入口文件的路径
		this.entryId;//'./src/index.js'
		//需要保存所有模块依赖
		this.modules={};
		this.entry=config.entry//入口路径
		this.root=process.cwd()//  当前文件的工作路径
	}
	run(){
		//执行，并创建依赖关系
		this.buildModule(path.resolve(this.root,this.entry),true)
		// 发射一个打包后的文件
		this.emitFile()
	}

	buildModule(modulePath,isEntry){

	}
	emitFile(){

	}
}

module.exports=Comipler