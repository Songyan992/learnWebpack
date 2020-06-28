// let button =document.createElement('button')
// button.innerHTML='hello'

// // vue 懒加载和react懒加载
// button.addEventListener('click',function(){
// 	console.log("click");
// 	// es6 语法，jsonp实现动态加载文件
// 	import("./source.js").then(data=>{
// 		console.log(data.default);
// 	})
// })

// document.body.appendChild(button)

import str from "./source.js"

console.log(str);

if(module.hot){
	module.hot.accept("./source",()=>{
		let str=require('./source.js')
		console.log(str);
	})	
}
