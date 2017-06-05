<template>
  <div id="app">
    ![](./assets/logo.png)
    {{ asd }}
    <button @click="change(233)">变为233</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    asd(){
      return this.$store.getters.getCount
    }
  },
  methods: {
    change(arg){
      this.$store.dispatch('setCount', arg)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
