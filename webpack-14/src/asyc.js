let { AsyncParallelHook } = require("tapable")
const { render } = require("react-dom")
//异步钩子，（串行）并行，需要等待所有并发的异步事件执行后才能执行回调函数
//注册方法，分为tap注册，和tapAsync注册
//tapable中有三种注册方式tap注册（同步注册）tapAsync(cb) tapPromise(注册是promise)
// 调用的三个不同方式：call callAsync promise
//同时发布多个请求
class Lesson {
	constructor() {
		this.hooks = {
			arch: new AsyncParallelHook(['name'])
		}
	}
	tap() {
		//tapAsync 的写法
		// this.hooks.arch.tapAsync('node', (name, cd) => {
		// 	setTimeout(() => {
		// 		console.log('node', name);
		// 		cd()
		// 	}, 1000)
		// }),
		// this.hooks.arch.tapAsync('react', (name, cd) => {
		// 	setTimeout(() => {
		// 		console.log('react', name);
		// 		cd()
		// 	}, 1000)
		// })

		//tapPromise写法
		this.hooks.arch.tapPromise('node', name => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log('node', name);
					resolve()
				}, 1000);
			})
		})
		this.hooks.arch.tapPromise('react', name => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					console.log('react', name);
					resolve()
				}, 1000);
			})
		})

	}
	start() {
		//tapAsync 的写法
		// this.hooks.arch.callAsync('songyan', () => {
		// 	console.log("end");
		// })

		//tapPromise写法
		this.hooks.arch.promise('songyan').then((result) => {
			console.log('end');
		})
	}
}
let l = new Lesson()
l.tap()//注册事件
l.start()//启动钩子