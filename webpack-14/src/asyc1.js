let { AsyncSeriesHook } = require("tapable")

class Lesson {
	constructor() {
		this.hooks = {
			arch: new AsyncSeriesHook(['name'])
		}
	}
	tap() {
		// tapAsync 的写法
		// this.hooks.arch.tapAsync('node', (name, cd) => {
		// 	setTimeout(() => {
		// 		console.log('node', name);
		// 		cd()
		// 	}, 1000)
		// }),
		// 	this.hooks.arch.tapAsync('react', (name, cd) => {
		// 		setTimeout(() => {
		// 			console.log('react', name);
		// 			cd()
		// 		}, 1000)
		// 	})


		// tapPromise写法
		this.hooks.arch.tapPromise('node', (name) => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log('node', name);
					resolve()
				}, 1000)
			})
		}),
			this.hooks.arch.tapPromise('react', (name) => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						console.log('react', name);
						resolve()
					}, 1000)
				})
			})

	}
	start() {
		// tapAsync 的写法
		// this.hooks.arch.callAsync('songyan', () => {
		// 	console.log("end");
		// })

		// tapPromise写法
		this.hooks.arch.promise('songyan').then(() => {
			console.log("end");
		})


	}
}
let l = new Lesson()
l.tap()//注册事件
l.start()//启动钩子