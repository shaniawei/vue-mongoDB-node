<template>
  <div class="father">
    <img src="../assets/logo.png">
    <HelloWorld num='10'></HelloWorld>
  </div>
</template>

<script>
/* eslint-disable */
    import HelloWorld from './HelloWorld'
    export default {
        name: 'father',
        data () {
            return {

            }
        },
        components:{
            HelloWorld
        }
    }
</script>

<style scoped>
   
</style>

