class AsyncParrallHook {//
	constructor(args) {//args数组
		this.tasks = []
	}
	// tapAsync(name, task) {
	// 	this.tasks.push(task)
	// }
	tapPromise(name, task) {
		this.tasks.push(task)
	}
	// callAsync(...args) {
	// 	let finalCallBack = args.pop()//拿出最终的函数
	// 	let index = 0
	// 	let done = () => {//promise.all
	// 		index++
	// 		if (index == this.tasks.length) {
	// 			finalCallBack()
	// 		}
	// 	}
	// 	this.tasks.forEach(task => {
	// 		task(...args, done)
	// 	})
	// }

	promise(...args) {
		let tasks = this.tasks.map(task => task(...args))
		return Promise.all(tasks)
	}
}
// 钩子：就是指定时期执行的函数
let hook = new AsyncParrallHook([])
// hook.tapAsync('react', (name, cd) => {
// 	setTimeout(() => {
// 		console.log('react', name);
// 		cd()
// 	}, 1000);
// });
// hook.tapAsync('node', (name, cd) => {
// 	setTimeout(() => {
// 		console.log('node', data);
// 		cd()
// 	}, 1000);
// });
// hook.tap('vue', data => {
// 	console.log('vue', data);
// });
// hook.callAsync('songyan', () => {
// 	console.log("end");
// })


hook.tapPromise('react', (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('react', name);
			resolve()
		}, 1000);
	})
});
hook.tapPromise('node', (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('node', name);
			resolve()
		}, 1000);
	})
});

hook.promise('songyan').then((result) => {
	console.log("end");
})


//AsyncParralleBailHook() 带保险的异步并发钩子