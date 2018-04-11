<template>
  <div class="hello">
    <button @click="add">+</button>
    <button @click="dec">-</button>
    <p>{{ num }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['num'],
  data () {
    return {
    }
  },
  methods: {
    add () {
      this.$emit('add')
    },
    dec () {
      this.$emit('dec')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
