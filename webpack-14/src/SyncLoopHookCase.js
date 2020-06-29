class SyncLoopHook {//同步遇到某个函数不返undefined时，会监听多次执行

	constructor(args) {//args数组
		this.tasks = []
	}
	tap(name, task) {
		this.tasks.push(task)

	}
	call(...args) {
		this.tasks.forEach(task => {
			let ret
			do {
				ret = task(...args)
			} while (ret != undefined);
		});
	}
}
let total = 0
// 钩子：就是指定时期执行的函数
let hook = new SyncLoopHook([])
hook.tap('react', name => {
	console.log('react', name);
	return ++total === 3 ? undefined : '继续执行'
});
hook.tap('node', name => {
	console.log('node', name);
});
hook.tap('vue', name => {
	console.log('vue', name);
});


hook.call('songyan')
