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


