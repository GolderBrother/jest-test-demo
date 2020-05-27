// 目前我们的Jest是不支持import...from....这种形式，如果使用就会报错，因为Jest默认支持的是CommonJS规范，也就是Node.js中的语法，他只支持require这种引用。所以我们使用import...from...是ES6的语法，所以使用就会报错
// 解决方法：直接使用Babel就可以把代码转换成CommonJS代码，然后就可以顺利进行测试了
// yarn add  @babel/core@7.4.5 @babel/preset-env@7.4.5  --dev
// 新建.babelrc文件
// {
//   "presets":[
//       [
//               "@babel/preset-env",{
//               "targets":{
//                   "node":"current"
//               }
//           }
//       ]
//   ]
// }

// 原理：在Jest里有一个babel-jest组件，我们在使用yarn test的时候，它先去检测开发环境中是否安装了babel，也就是查看有没有babel-core，如果有bable-core就会去查看.babelrc配置文件，根据配置文件进行转换，转换完成，再进行测试


export function baojian1(money) {
  return money >= 200 ? '至尊享受' : '基本按摩'
}

export function baojian2(money) {
  return money >= 1000 ? '双人服务' : '单人服务'
}

// 进度
// 看到 p09：异步代码的测试方法 - 1回调函数式        ———————— 2020.5.26
// https://jspang.com/detailed?id=63#toc344