#### 优化点

yarn add webpack webpack-cli html-webpack-plugin @babel/core babel-loader @babel/preset-env @babel/preset-react -D

1.引入第三方的库时候，不去加载第三方库的依赖，配置如下

		module: {
			noParse:/jquery/, //不去解析jquery下的依赖
		}

打包时间缩短：4720ms-> 2759ms

2.


