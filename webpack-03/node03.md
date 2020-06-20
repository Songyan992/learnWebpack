## webpack css loader
直接在src的index.js中引入require("./index.css")，会报错

> ERROR in ./src/index.css 1:4
Module parse failed: Unexpected token (1:4)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
body{
|       background-color: aquamarine;
| }
 @ ./src/index.js 7:0-22



 ###  loader:就是将源代码进行转化称模块

 	module: {//模块
		//loader
		rules: [//规则 
			//css-loader 解析 @import这种语法
			//style-loader 把css插入到head的标签中
			// loder 的特点，单一处理
			// { test: /\.css$/, use: 'css-loader' } use只用一个的时候，就用字符串
			// 使用多个loader，use:[]定义为数组，执行顺序，从右向左,从下到上
			//loader还可以定义称对象的方式
			//use: {loader: 'css-loader',options: {//传递参数}}
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					'css-loader'
				]
			}
		]
	}

安装：yarn add css-loader style-loader -D

在webpack.config.js中配置

	module: {//模块
		//loader
		rules: [//规则 
			//css-loader 解析 @import这种语法
			//style-loader 把css插入到head的标签中
			// loder 的特点，单一处理
			// { test: /\.css$/, use: 'css-loader' } use只用一个的时候，就用字符串
			// 使用多个loader，use:[]定义为数组，执行顺序，从右向左,从下到上
			//loader还可以定义称对象的方式
			//use: {loader: 'css-loader',options: {//传递参数}}
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',//插入style标签中
						options: {
							// 方式1
							insert:'top'//在html 插入自己的样式，在模块化样式在前面，自己定义的样式在后面，这样就可以使用自己定义的样式。
							// 方式2
							// insert: function insertAtTop(element) {
							// 	var parent = document.querySelector('head');
							// 	var lastInsertedElement =
							// 		window._lastElementInsertedByStyleLoader;

							// 	if (!lastInsertedElement) {
							// 		parent.insertBefore(element, parent.firstChild);
							// 	} else if (lastInsertedElement.nextSibling) {
							// 		parent.insertBefore(element, lastInsertedElement.nextSibling);
							// 	} else {
							// 		parent.appendChild(element);
							// 	}

							// 	window._lastElementInsertedByStyleLoader = element;
							// },
						},
						
					},
					'css-loader',//@import 将css文件转为模块化文件，解析路径
				]
			}
		]
	}

	设置 less 文件
	yarn add less less-loader -D

		//匹配.less文件
		{
			test: /\.less$/,
			use: [
				{
					loader: 'style-loader',//插入style标签中
					options: {
						//在html 插入自己的样式，在模块化样式在前面，自己定义的样式在后面，这样就可以使用自己定义的样式。
						insert: function insertAtTop(element) {
							var parent = document.querySelector('head');
							var lastInsertedElement =
								window._lastElementInsertedByStyleLoader;

							if (!lastInsertedElement) {
								parent.insertBefore(element, parent.firstChild);
							} else if (lastInsertedElement.nextSibling) {
								parent.insertBefore(element, lastInsertedElement.nextSibling);
							} else {
								parent.appendChild(element);
							}

							window._lastElementInsertedByStyleLoader = element;
						},
					},
				},
				'css-loader',//@import 将css文件转为模块化文件，解析路径
				'less-loader'//把less转为css
			]
		}





