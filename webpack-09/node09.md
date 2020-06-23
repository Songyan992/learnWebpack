### webpack 跨域

在跟目录下写一个server.js文件，启动3000端口的服务

	//express
	let express =require('express')
	let app = express()
	app.get("/api/user",(req,res)=>{
		res.json({name:'songyan'})
	})
	app.listen(3000)

启动服务：node server.js

在浏览器中输入：http://localhost:3000/api/user 可得到返回值：{"name":"songyan"}

##### webpack-dev-server 默认启动的8080端口，需要解决跨域问题

异常信息：home.55b7e2b636b294378ed9.js:2 GET http://localhost:8080/api/user 404 (Not Found)

配置：

	devServer:{
		proxy:{
			"/api":'http://localhost:3000'//配置一个代理
		}
	},

这样就能正确访问到数据：{"name":"songyan"}


接口简写：

	//express
	let express =require('express')
	let app = express()
	app.get("/user",(req,res)=>{
		res.json({name:'songyan11'})
	})
	app.listen(3000)

配置设置：

	devServer:{
		proxy:{//配置一个代理
			"/api":{
				target:'http://localhost:3000',
				pathRewrite:{
					'/api':''
				}

			}
		}
	},


#### 前端模拟数据

	//index.js
	let xhr=new XMLHttpRequest()
	xhr.open('GET','/user',true)
	xhr.onload=function(){
		console.log(xhr.response);
		
	}
	xhr.send()


	// server.js //express
	let express =require('express')
	let app = express()
	app.get("/user",(req,res)=>{
		res.json({name:'songyan11'})
	})
	app.listen(3000)


	//webpack.config.js
	devServer:{
		// 2. 前端只想单纯来模拟数据
		before(app){//提供的钩子
			app.get('/user',(req,res)=>{
				res.json({name:'aaa--before'})
			})
		}
	},

#### 有服务端，不用代理处理数据，在服务端中启动webpack的端口，端口用服务端的端口

安装中间件： yarn add webpack-dev-middleware -D

直接配置server.js文件

	//express
	let express = require('express')
	let webpack = require('webpack')
	let app = express()
	//中间件
	let middle = require("webpack-dev-middleware")
	let config = require("./webpack.config.js")
	let compiler = webpack(config)

	app.use(middle(compiler))

	app.get("/user", (req, res) => {
		res.json({ name: 'songyan11' })
	})
	app.listen(3000)

	直接运行http://localhost:3000 可以拿到打包后的数据


### resolve 的使用

安装样式loader  yarn add css-loader style-loader -D

配置：

		rules: [
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			}
		]

安装样式框架：yarn add bootstrap

使用：import "bootstrap"//这样使用的是默认的bootstrap.js文件,需要设置

使用：import "bootstrap/dist/css/bootstrap.css"

或者配置别名

	resolve:{//解析 第三方包 common等
		modules: ['node_modules'],
		alias:{//设置别名
			bootstrap:'bootstrap/dist/css/bootstrap.css'
		}
	},

这样使用的时候就可以直接用：import "bootstrap"

或者配置

	resolve:{//解析 第三方包 common等
		modules: ['node_modules'],
		mainFields:['style','main']
		// alias:{//设置别名
		// 	bootstrap:'bootstrap/dist/css/bootstrap.css'
		// }
	},


##### import 文件不写后缀就会报错，在resolve中配置不用写后缀也能引用

import "./index"

	ERROR in ./src/home.js
	Module not found: Error: Can't resolve './index' in '/Users/songyan/Desktop/study/vueStudy/webpack/learnWebpack/webpack-09/src'
	@ ./src/home.js 2:0-17


配置：	extensions:['.js','.css','.json','.vue']



