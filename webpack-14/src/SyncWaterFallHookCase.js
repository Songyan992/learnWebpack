class SyncWaterfallHook {//瀑布流水，把上一次的结果传递给下一个

		constructor(args) {//args数组
			this.tasks = []
		}
		tap(name, task) {
			this.tasks.push(task)
		}
		call(...args) {
			let [frist,...others]=this.tasks
			let ret=frist(...args)
			others.reduce((a,b)=>{
				return b(a)
			},ret)
	}
}
	// 钩子：就是指定时期执行的函数
	let hook = new SyncWaterfallHook([])
	hook.tap('react', data => {
		console.log('react', data);
		return "react ok"
	});
	hook.tap('node', data => {
		console.log('node', data);
		return 'node ok'
	});
	hook.tap('vue', data => {
		console.log('vue', data);
	});


hook.call('songyan')
	