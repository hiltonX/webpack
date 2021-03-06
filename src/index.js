/**
 * webpack的入口起点文件
 * 
 * 
 * 开发环境  
 * webpack ./src/index.js -o ./build --mode=development
 * 
 * 以./src/index.js为入口文件，将chunk输出到./build文件夹下，打包成main.js
 * 
 * 
 *  * 生产环境  
 * webpack ./src/index.js -o ./product --mode=production
 * 
 * 以./src/index.js为入口文件，将chunk输出到./product文件夹下，打包成main.js
 * 
 * 
 * 
 * 1. webpack只能处理js/json资源，不能处理css/img等其他资源
 * 2. webpack将ES6语法编译成浏览器能识别的语法
 * 3. 生产环境比开发环境多压缩一个js代码
 * 
 */

import data from './data.json'

console.log(data, 'data')

function add (x = 1, y = 2) {
  return x + 2
}


console.log(add())