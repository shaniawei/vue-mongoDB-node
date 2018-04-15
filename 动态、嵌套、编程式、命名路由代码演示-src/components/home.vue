<template>
  <div class="home">
      <h1>这是主页</h1>
      <router-link to='/luyounoparams'>直接跳转不带参数</router-link><br>
      <button @click="jumpLuyounoparams" style="margin:20px 0;">编程式不带参数跳转</button>
      <div v-for="item in list" :key="item">
          <!--动态路由&命名路由-->
          <router-link :to="{name:'luyouhasparams',params:{id:item}}">跳转到动态路由test页面</router-link>
          <!--编程式路由-->
          <button @click="jumpLuyouhasparams(item)" style="margin:20px 0;">编程式带参数跳转</button>
      </div>
  </div>
</template>
<script>
/* eslint-disable */
    export default{
        data () {
            return {
                list:[1,2,3,4]
            }
        },
        methods: {
            jumpLuyounoparams () {
                this.$router.push('/luyounoparams')
            },
            jumpLuyouhasparams (id) {
                this.$router.push({name:'luyouhasparams',params:{id:id}})
            }
        }
    }
</script>
