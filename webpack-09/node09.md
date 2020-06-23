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