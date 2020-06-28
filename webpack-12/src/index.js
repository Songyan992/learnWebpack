// import calc from './test.js'
// import 在生产环境下， 会自动删除掉没有用到的代码，比如calc.minus
//tree-shaking 把没用到的代码， 自动删除
// console.log(calc.sum(30,343));


//scope hosting 作用域提升
// let a =1;
// let b=2;
// let c=3;
// let d=a+b+c//在webpack 中自动省略，可以简化代码

// console.log(d);

// let calc = require("./test")
// console.log(calc.default.sum(1,23));


// 在index.js中需要使用a.js和b.js
// 在other.js中也需要使用a.js和b.js
// 这时候可以把a.js和b.js抽取出来

import "./a.js"
import "./b.js"
console.log("index.js");

import $ from "jquery"
console.log($);

