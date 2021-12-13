<template>
  <div class="contanier">
    <div class="d-flex flex-row justify-content-center">
      <div v-for="product in products" :key="product.id">
      <SingleProduct :product="product" />
    </div>
    </div>
  </div>
</template>

<script>

import SingleProduct from './SingleProduct.vue';
import { products } from '../utils/mockData';

export default {
  components: { SingleProduct },
  setup() {
    return {products}  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
