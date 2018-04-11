<template>
  <div class="father">
    <img src="../assets/logo.png">
    <HelloWorld v-bind:num='num' @add='add' @dec='dec'></HelloWorld>
    <p>这个数字是：{{ num }}</p>
  </div>
</template>

<script>
/* eslint-disable */
    import HelloWorld from './HelloWorld'
    export default {
        name: 'father',
        data () {
            return {
                num:10
            }
        },
        components:{
            HelloWorld
        },
        methods:{
            add () {
                this.num++
            },
            dec () {
                this.num--
            }
        }
    }
</script>

<style scoped>
   
</style>

