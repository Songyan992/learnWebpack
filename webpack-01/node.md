## webpack 安装
- 安装本地的webpack
- webpack webpack-cli -D (上线的时候不需要，只是在开发时候需要)
cd 目录
yarn init -y (会在目录下生成一个package.json文件)
yarn add webpack webpack-cli -D (-D开发依赖,上线时候不需要)

## webpack 可以进行0配置
- 打包工具->输出后的结果（js模块）
- webpack作用：打包(支持js的模块化)


## 运行执行命令：npx webpack 会有警告
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

## 手动配置webpack
- 默认配置是webpack.config.js
运行 npx webpack 默认执行的是 webpack.config.js
当不存在webpack.config.js，而执行npx webpack 命令时候，会报错
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

- 如果想改配置文件的名称，则可以如下操作
npx webpack --config xxx.js(xxx:修改的配置文件名称)
例如：把文件名称修改为：webpack.config.copy.js 
则可：npx webpack --config webpack.config.copy.js
- 如果文件名称太长，则通过package.json文件来配置,通过执行npm run build，‘build’对应下面设置的名称
  "scripts": {
    //"build":"webpack" //默认配置，则对应：webpack.config.js，文件的默认名称
		"build":"webpack --config webpack.config.copy.js" //文件名更改后的配置，则对应：webpack.config.copy.js，
  },



