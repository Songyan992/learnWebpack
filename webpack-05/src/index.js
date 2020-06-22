console.log('hello webpack');

let str = require("./a.js")
console.log(str);


require("./index.css")

require('./index.less')

const a = () => {
	console.log("a====>aa");
}
a


@annotation
class A {
 a =1
}
let aa =new A()
console.log(aa.a);

function annotation(target){
	console.log(target,"23");
	
}

