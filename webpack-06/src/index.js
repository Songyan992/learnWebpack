//webpack 打包图片
import img from './33.jpg'
let image =new Image()
image.src=img
document.body.appendChild(image)



//内联loader  的写法
// import $ from "jquery"
// console.log($);


// console.log('hello webpack');

// let str = require("./a.js")
// console.log(str);


require("./index.css")

// require('./index.less')

// const a = () => {
// 	console.log("a====>aa");
// }
// a


// @annotation
// class A {
//  a =1
// }
// let aa =new A()
// console.log(aa.a);

// function annotation(target){
// 	console.log(target,"23");
	
// }

