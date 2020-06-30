#! /usr/bin/env node

// console.log("start");
// 需要找到当前执行的路径，拿到webpack.config.js
let path =require('path')

let config=require(path.resolve(__dirname))

let Comipler =require('./lib/Comipler')
let comilper=new Comipler(config)
// 标识运行编译
comilper.run()
