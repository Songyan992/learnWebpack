#! /usr/bin/env node

// console.log("start");
// 需要找到当前执行的路径，拿到webpack.config.js
let path =require('path')

let config=require(path.resolve('webpack.config.js'))

let Comipler =require('../lib/Comipler.js')
let comilper=new Comipler(config)
// 标识运行编译
comilper.run()
