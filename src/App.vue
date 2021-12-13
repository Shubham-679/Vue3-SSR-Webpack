<template>
   <div id="app">
     <Home />
    <!-- <Products /> -->
  </div>
</template>

<script>
// import Products from './components/Products.vue'
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    // Products,
    Home
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* max-width:900px; */
}
</style>
