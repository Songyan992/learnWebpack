class AsyncSeriesHook {//
	constructor(args) {//args数组
		this.tasks = []
	}

	// tapAsync(name, task) {
	// 	this.tasks.push(task)
	// }
	// callAsync(...args) {
	// 	let finalCallBack = args.pop()
	// 	let index = 0
	// 	let next = () => {
	// 		if(index===this.tasks.length){
	// 			return finalCallBack()
	// 		}
	// 		let task = this.tasks[index++]
	// 		task(...args, next)
	// 	}
	// 	next()
	// }

	tapPromise(name, task) {
		this.tasks.push(task)
	}

	promise(...args) {
		let [first, ...others] = this.tasks
		return others.reduce((p, n) => {//redux源码
			return p.then(() => {
				n(...args)
			})
		}, first(...args))
	}

}
// 钩子：就是指定时期执行的函数
let hook = new AsyncSeriesHook([])

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


hook.tapPromise('react', (name) => {
	return new promise((resolve, reject) => {
		setTimeout(() => {
			console.log('react', name);
			resolve()
		}, 1000);
	})
});
hook.tapPromise('node', (name) => {
	return new promise((resolve, reject) => {
		setTimeout(() => {
			console.log('node', name);
			resolve()
		}, 1000);
	})
});

hook.tap('vue', data => {
	console.log('vue', data);
});
// hook.callAsync('songyan', () => {
// 	console.log("end");
// })

hook.promise('songyan').then(() => {
	console.log("end");
})



