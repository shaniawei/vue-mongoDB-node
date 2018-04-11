# vue-shopping

> 商城

## Build Setup

``` bash

npm install -g vue-cli

npm init webpack vue-shopping

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



vue 是一个MVC框架：数据驱动、状态管理、组件化

#### vue是如何实现双向数据绑定的？ 

答：Object.defineProperty函数起至关重要作用

 [查看demo ](https://shaniawei.github.io/vue-mongoDB-node/Bi-directional-data-binding.html) 打开demo在控制台设置 obj.username的值 ，input和span的值就会发生变化。



#### vue和react的相同点：

- 利用**虚拟dom**进行快速渲染
- 响应式组件
- 轻量级
- 支持服务端渲染？？？
- 易于集成路由，打包，状态管理工具(父组件与子组件之间的通信 vue-x？)
- 允许最大化的自定义项目，更加灵活的开发



#### vue相对于react的优势：

- 渲染速度更快，体积更小
- 语法更加简单，容易上手
- 模板简洁



#### react相对于vue的优势：

- 适用于大型应用
- 支持web与原生app开发



#### 父子组件通信

父组件传数据给子组件 通过props

子组件传数据给父组件 通过emit触发自定义事件

代码演示在 **父子组件通信demo代码演示-src** 目录下

复杂的通信 建议使用 **`vue-x`**