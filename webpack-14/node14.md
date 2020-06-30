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


#### 同步钩子包括：

SyncHook 同步钩子

SyncBailHook 同步钩子有retern 值，只要不是undefind就会继续向下执行

SyncWaterFallHook 同步钩子，有retern 值，retern 值会向下传递

SyncLoopHook 同步钩子，有retern 值，遇到不返undefined时，会监听多次执行,直到 undefined

#### 异步钩子：

异步并行钩子：AsyncParallelHook

异步串行钩子：AsyncSeriesHook

异步串行瀑布钩子：AsyncSeriesWaterfallHook







