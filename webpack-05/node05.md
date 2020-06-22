### webpack 配置第三方插件
#### jqurey，将jquery暴露给全局，全局变量引入问题
安装：yarn add jquery


expose-loader 暴露全局的loader 内联loader
pre前面执行的loader/normal 普通loader/内联loader/后置 postloader

安装：yarn add expose-loader

使用
方式1:
	import $ from "expose-loader?$!jquery"
	console.log(window.$);

方式2:
	{
		test:require.resolve('jquery'),
		use:'expose-loader?$'
	},
	import $ from "jquery"
	console.log(window.$);

方式3:在每个模块中注入$对象,配置webpack.config.js的plugins数组
	new Webpack.ProvidePlugin({//在每个模块中都注入$
		$:'jquery'
	})
	使用：console.log($);

方式4，引入不打包
在html中引入
	<script src="https://code.jquery.com/jquery-3.1.0.js"></script>

在js文件中import 
 bundle.js    680 KiB  //又引入又打包，这样体积变得很大
 bundle.js    363 KiB 配置后

配置：
	module.exports = {
		//...
		externals: {
			jquery: '$'
		}
	};