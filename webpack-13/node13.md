### 懒加载

#### 加载插件，最新webpack已经默认支持，不用手动配置

之前低版本需要配置：

es6 语法，jsonp实现动态加载文件
 
yarn add @babel/plugin-syntax-dynamic-import -D

在webpack-config.js中配置

plugins:[
	"@babel/plugin-syntax-dynamic-import"
]


#### 热更新

		devServer: {
			hot:true,
		}

		plugins: [
			new HtmlWebpackPlugin({
				template: './public/index.html'
			}),
			new Webpack.NamedModulesPlugin({}),//哪个模块需要热更新
			new Webpack.HotModuleReplacementPlugin({})////热更新插件
		],

在index.js 中引入

	import str from "./source.js"

	console.log(str);

	if(module.hot){
		module.hot.accept("./source",()=>{
			let str=require('./source.js')
			console.log(str);//监听更新的内容
		})	
	}
