let {SyncHook}=require("tapable")

class Lesson{
	constructor() {
		this.hooks={
			arch:new SyncHook(['name'])
		}
	}
	tap(){
		this.hooks.arch.tap('node',name=>{
			console.log('node',name);
			// return "停止了"//syncBailHook
		}),
		this.hooks.arch.tap('react',name=>{
			console.log('react',name);
		})
	}
	start(){
		this.hooks.arch.call('songyan')
	}
}
let l=new Lesson()
l.tap()//注册事件
l.start()//启动钩子