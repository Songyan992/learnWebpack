#### webpack 优化点

// import 在生产环境下(mode:'production')， 会自动删除掉没有用到的代码，比如calc.minus
//tree-shaking 把没用到的代码， 自动删除

//使用require("./test")在生产环境下不会自动删除没有用到的文件
	let calc = require("./test")
	console.log(calc.default.sum(1,23));	


//scope hosting 作用域提升
	let a =1;
	let b=2;
	let c=3;
	let d=a+b+c//在webpack 中自动省略，可以简化代码
	console.log(d);

### webpack 抽取公共代码

在index.js中需要使用a.js和b.js

在other.js中也需要使用a.js和b.js

这时候可以把a.js和b.js抽取出来

设置：

		optimization:{
			splitChunks:{//分割代码块
				cacheGroups:{//缓存组
					common:{
						chunks:'initial',
						minSize:0,//最小代码超过0个字节
						minChunks:2,// 公共使用过2次以上
					}
				}
			}
		},

common~index~other.js dist文件夹下抽离的公共文件

抽离公共引入的第三方库，抽离第三方模块：比如

在other.js中引入了

	import $ from "jquery"
	console.log($);

在c.js中也引入

	import $ from "jquery"
	console.log($);


配置：

	optimization:{
		splitChunks:{//分割代码块
			cacheGroups:{//缓存组
				common:{
					chunks:'initial',
					minSize:0,//最小代码超过0个字节
					minChunks:2,// 公共使用过2次以上
				},
				vendor:{
					priority:1,//权重提升为1
					test:/node_modules/,
					chunks:'initial',
					minSize:0,//最小代码超过0个字节
					minChunks:2,// 公共使用过2次以上
				}
			}
		}
	},

抽离出，vendor~index~other.js  这个就是公共的第三方文件
