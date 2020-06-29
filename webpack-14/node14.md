### tapable

tapable:

webpack 是一种事件流机制，它的工作流程是将各个插件串联起来，而实现这一切的核心就是tapable,tapable有点类似node.js的events库，核心原理也是依赖发布订阅模式

  const {
		Tapable,
		SyncHook,
		SyncBailHook,
		AsyncParallelHook,
		AsyncSeriesHook
	} = require("tapable");

安装：yarn add tapable
