module.exports = '和速度速度呢'

require("@babel/polyfill")

class B {

}

function* gen(params) {
	yield 1;
}
console.log(gen().next());

const p = () => new Promise(resolve => {
	resolve(1)
})

p.then(res => {
	console.log(res);

})

"aaa".includes('a')


