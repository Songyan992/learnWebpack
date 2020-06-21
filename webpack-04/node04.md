### babel-loader
安装：yarn add babel-loader @babel/core @babel/preset-env -D

可以将es6语法转为es5,比如
let a=()=>{console.log("a====>aa");}
转换为 var a=function (){console.log("a====>aa");}

在webpack.config.js中设置如下

	{
		test:/\.js$/,
		use:{
			loader:'babel-loader',
			options:{//用babel-loader 作用是把es6->es5
				presets:[
					'@babel/preset-env'
				]
			}
		}
	}

#### 当使用class时候，没有配置会报错
> ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: /Users/songyan/Desktop/study/vueStudy/webpack/learnWebpack/webpack-04/src/index.js: Support for the experimental syntax 'classProperties' isn't currently enabled (17:4):
class A{

}

解决错误方式如下：添加 @babel/plugin-proposal-class-properties
安装：yarn add @babel/plugin-proposal-class-properties -D
配置：

	{
			test:/\.js$/,
			use:{
				loader:'babel-loader',
				options:{//用babel-loader 作用是把es6->es5
					presets:[
						'@babel/preset-env'
					],
					plugins:[
						'@babel/plugin-proposal-class-properties'
					]
				}
			}
		}

#### 装饰器 @

没有配置时候使用装饰器会报错
> ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: /Users/songyan/Desktop/study/vueStudy/webpack/learnWebpack/webpack-04/src/index.js: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (17:1):
@log
class A {
  a =1
}

安装：yarn add @babel/plugin-proposal-decorators -D
配置

	{
			test:/\.js$/,
			use:{
				loader:'babel-loader',
				options:{//用babel-loader 作用是把es6->es5
					presets:[
						'@babel/preset-env'
					],
					plugins:[
						["@babel/plugin-proposal-decorators", { "legacy": true }],
						["@babel/plugin-proposal-class-properties", { "loose" : true }]
					]
				}
			}
		}

#### 高级函数转换 regeneratorRuntime异常处理  设置代码运行时的包

如果使用高级函数，在babel-loader不能进行自动转换。会报错
> Uncaught ReferenceError: regeneratorRuntime is not defined
    at eval (a.js:1)
    at Object../src/a.js (bundle.js?4c8365c69c9e4d9f2f96:471)
    at __webpack_require__ (bundle.js?4c8365c69c9e4d9f2f96:20)
    at eval (index.js:7)
    at Object../src/index.js (bundle.js?4c8365c69c9e4d9f2f96:493)
    at __webpack_require__ (bundle.js?4c8365c69c9e4d9f2f96:20)
    at eval (webpack:///multi_(:3000/webpack)-dev-server/client?:2:18)
    at Object.0 (bundle.js?4c8365c69c9e4d9f2f96:515)
    at __webpack_require__ (bundle.js?4c8365c69c9e4d9f2f96:20)
    at bundle.js?4c8365c69c9e4d9f2f96:84

安装：
 yarn add @babel/plugin-transform-runtime -D
 yarn add @babel/runtime

配置：
	{
		"plugins": ["@babel/plugin-transform-runtime"]
	}

#### es7 includes 高级语法配置 @babel/polyfill

安装： yarn add  @babel/polyfill

使用的时候需要在文件中引入 require("@babel/polyfill")
打包后：Array.prototype.includes

#### 给js代码添加校验器 eslint-loader
安装：yarn add eslint eslint-loader -D
配置：

	{
			test: /\.js$/,
			use: {
				loader: 'eslint-loader',
				options: {
					enforce: 'pre'//previous强制 在babel-loader前面执行
				}
			},
		},

设置.eslintrc.json

