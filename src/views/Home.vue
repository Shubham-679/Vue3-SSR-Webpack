<template>
  <div class="container" id="container">
    <Navbar />
    <Products />
  </div>
</template>

<script>
import Products from "../components/Products.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Products, Navbar },
};
</script>

<style>
#container {
  max-width:1080px;
}
</style>
