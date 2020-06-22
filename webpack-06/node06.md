### webpack 打包图片
- 在js中创建图片来引入
- 在css中引入background('url')
- <img src='' alt=''/>


### 使用

	let image =new Image()
	image.src='./33.jpg'
	document.body.appendChild(image)

报错 33.jpg:1 GET http://localhost:3000/33.jpg 404 (Not Found)

	import img from './33.jpg'
	let image =new Image() 
	image.src=img
	document.body.appendChild(image)

也是报错
> ERROR in ./src/33.jpg 1:0
Module parse failed: Unexpected character '�' (1:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
(Source code omitted for this binary file)
 @ ./src/index.js 2:0-27 5:12-15

### 使用 file-loader 
file-loader 默认会在内部生成一张图片，到build目录下，把生成到图片名字返回回来

安装：yarn add file-loader -D

使用：
	{
		test:/\.(png|jpg|gif)$/,
		use:[
			'file-loader'
		]
	},

> <img src='' alt=''/> 对src路径进行匿名
 
 ### html-withimg-loader 

安装： yarn add html-withimg-loader -D

> 使用
	{
		test:/\.(png|jpg|gif)$/,
		use:{
			loader:'file-loader',
			options:{
				esModule: false,
			}
		}
	},

yarn add url-loader

> {
		test:/\.(png|jpg|gif)$/,
		use:{
			// 'file-loader'
			//做一个限制，小于多少k的时候，就用base64来转换
			//否则用file-loader产生真实的图片
			loader:'url-loader',
			options:{
				limit:200*1024,
				esModule: false,
			}
		}
	},


### 打包文件分类

配置：

	options:{
		limit:1,
		esModule: false,
		outputPath:'img/'
	}

	new MiniCssExtractPlugin({
		filename: 'css/main.css'
	}),

>img/efeab90e4379247ef815d8e23af4d74d.jpg  3.23 KiB   
 css/main.css 


#### 加域名
配置：

	publicPath:'http:www.xxx.com'    //这个是给全部路径都加上域名，包括，.js/.css/img等文件

http:www.xxx.com/css/main.css?e2a51b7e32c38f56cd23

只给图片加
	{
			test:/\.(png|jpg|gif)$/,
			use:{
				// 'file-loader'
				//做一个限制，小于多少k的时候，就用base64来转换
				//否则用file-loader产生真实的图片
				loader:'url-loader',
				options:{
					limit:1,
					esModule: false,
					outputPath:'/img/',
					publicPath:'http:www.xxx.com' //设置在图片的配置下
				}
			}
		},

http:www.xxx.com/efeab90e4379247ef815d8e23af4d74d.jpg