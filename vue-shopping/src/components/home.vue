<template>
  <div class="home">
      <h1>这是主页</h1>
      <button @click="get">get请求</button><br>
      <button @click="post">post请求</button><br>
      <button @click="jsonp">jsonp请求</button><br>
      <button @click="http">http请求</button><br>
      <h4>{{ msg }}</h4>
  </div>
</template>
<script>
/* eslint-disable */
    export default{
        data () {
            return {
                msg:''
            }
        },
        http:{ //设置api的统一域名
            root:'http://localhost:8080/static/'
        },
        methods: {
            get () {
                this.$http.get('package.json',{
                    params:{
                        id:123
                    },
                    headers:{
                        token:'abc'
                    }
                }).then((res) => {
                    //响应成功后
                    this.msg=res
                },(res) => {
                    //响应失败后
                    console.log('失败')
                    this.msg=res
                })
            },
            post () {
                this.$http.post('http://127.0.0.1:3002/save',{
                    // user:'mm'
                },{
                    headers:{
                        // posttoken:'efg'
                    }
                }).then((res) => {
                    //响应成功后
                    this.msg=res.data
                },(res) => {
                    console.log('失败')
                    //响应失败后
                    this.msg=resv
                })
            },
            jsonp () {
                this.$http.jsonp('http://127.0.0.1:3002/person').then((res) => {
                    //响应成功v后
                    // thisv.msg=resv
                    console.log('成功')
                    console.log(res)
                },(res) => {
                    //响应失败后
                    console.log('失败')
                    console.log(res)
                    // this.msg=res
                })
            },
            http () {
                this.$http({
                    url:'package.json',
                    params:{
                        userid:'ww'
                    },
                    headers:{
                        wwtoken:'bendan'
                    },
                    timeout:5,
                    before () {
                        //请求成功之前做的事情
                        console.log(12345)
                    }
                }).then((res) => {
                    //响应成功后
                    this.msg = res.data
                },(res) => {
                    //响应失败后
                    this.msg=res.data
                })
            }
        }
    }
</script>
<style>
 button{
     margin-bottom: 20px;
 }
</style>

