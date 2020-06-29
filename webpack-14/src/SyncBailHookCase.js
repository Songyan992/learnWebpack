class SyncBailHook {//当注册事件返回任意非undefined的值时候，则停止向下执行
	constructor(args) {//args数组
		this.tasks = []
	}
	tap(name, task) {
		this.tasks.push(task)
	}
	call(...args) {
		let ret;
		let index = 0
		do {
			ret = this.tasks[index++](...args)
		} while (ret === undefined && index < this.tasks.length)
	}
}
// 钩子：就是指定时期执行的函数
let hook = new SyncBailHook([])
hook.tap('react', name => {
	console.log('react', name);
	return "停止向下执行"
});
hook.tap('node', name => {
	console.log('node', name);
});
hook.call('songyan')