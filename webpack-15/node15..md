### 手写webapck


##### 新建简单的webpack 工程

建立简单webpack 文件，yarn add  webpack webpack-cli

建立webpack.config.js 简单配置

npx webpack 构建工程，打包出dist 目录


#### 建立自定义 的 pack文件

1.创建文件夹 sy-pack 执行 yarn init 初始化项目

2.在package.json下配置：bin的内容

	{
		"name": "sy-pack",
		"version": "1.0.0",
		"main": "index.js",
		"license": "MIT",
		"bin": {
			"sy-pack": "./bin/sy-pack.js"
		}
	}

3.建立sy-pack.js 文件，随便输出点内容

4.执行 npm link 

 >npm WARN sy-pack@1.0.0 No description
npm WARN sy-pack@1.0.0 No repository field.
up to date in 1.737s
found 0 vulnerabilities
/usr/local/bin/sy-pack -> /usr/local/lib/node_modules/sy-pack/bin/sy-pack.js
/usr/local/lib/node_modules/sy-pack -> /Users/songyan/Desktop/study/vueStudy/webpack/learnWebpack/sy-pack

5.在最初建立的简单webpack 工程目录下，执行npm link sy-pack

 >/Users/songyan/Desktop/study/vueStudy/webpack/learnWebpack/webpack-15/node_modules/sy-pack -> /usr/local/lib/node_modules/sy-pack -> /Users/songyan/Desktop/study/vueStudy/webpack/learnWebpack/sy-pack

这样在简单工程中也可以执行自定义pack文件

接下来 写sy-pack.js逻辑

Comipler.js

main.ejs


安装ejs yarn add ejs



