class SyncHook{//钩子是同步的
	constructor(args) {//args数组
		this.tasks=[]
	}
	tap(name,task){
		this.tasks.push(task)
	}
	call(...args){
		this.tasks.forEach(task=>task(...args))
	}
}
// 钩子：就是指定时期执行的函数
let hook=new SyncHook([])
hook.tap('react',name=>{
	console.log('react',name);
});
hook.tap('node',name=>{
	console.log('node',name);
});
hook.call('songyan')