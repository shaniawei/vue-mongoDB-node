// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vue-resource
import Resource from 'vue-resource'

// 使用vue-resource
Vue.use(Resource)

Vue.config.productionTip = false

/* eslint-disable*/
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    mounted() { //全局拦截器
        Vue.http.interceptors.push((requst, next) => {
            console.log('requst init') //请求之前做的事情，比如出现loading
            console.log(requst)
            next((res) => { //请求之后做的事情 ，比如隐藏loading
                console.log(res)
            })
        })
    }
})