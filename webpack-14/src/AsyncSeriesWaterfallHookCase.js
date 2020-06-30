class AsyncSeriesWaterfallHook {//
	constructor(args) {//args数组
		this.tasks = []
	}
	tapAsync(name, task) {
		this.tasks.push(task)
	}

	callAsync(...args) {
		let finalCallBack = args.pop()//拿出最终的函数
		let index = 0
		let next = (err,data) => {//promise.all
			let task=this.tasks[index]
			if(!task)return finalCallBack()
			if(index==0){
				task(...args,next)
			}else{
				task(data,next)
			}
			index++
		}
		next()
	}


	// tapPromise(name, task) {
	// 	this.tasks.push(task)
	// }
	// promise(...args) {
	// 	let tasks = this.tasks.map(task => task(...args))
	// 	return Promise.all(tasks)
	// }
}
// 钩子：就是指定时期执行的函数
let hook = new AsyncSeriesWaterfallHook([])

hook.tapAsync('react', (name, cd) => {
	setTimeout(() => {
		console.log('react', name);
		cd(null,'结果')
	}, 1000);
});
hook.tapAsync('node', (data, cd) => {
	setTimeout(() => {
		console.log('node', data);
		cd(null)
	}, 1000);
});
hook.tap('vue', data => {
	console.log('vue', data);
});

hook.callAsync('songyan', () => {
	console.log("end");
})


// hook.tapPromise('react', (name) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('react', name);
// 			resolve()
// 		}, 1000);
// 	})
// });
// hook.tapPromise('node', (name) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('node', name);
// 			resolve()
// 		}, 1000);
// 	})
// });

// hook.promise('songyan').then((result) => {
// 	console.log("end");
// })


//AsyncParralleBailHook() 带保险的异步并发钩子