<template>
  <div class="luyou">
    路由test
    <h1>{{ $route.params.id }}</h1>
     <div>
        <router-view></router-view>
    </div>
    <router-link to='/luyounoparams/child'>显示嵌套的child页面</router-link>
  </div>
</template>

<script>
/* eslint-disable */
    export default {
        name: 'luyou',
        data () {
            return {
                
            }
        }
    }
</script>

<style scoped>
   
</style>

