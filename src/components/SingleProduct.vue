<template>
  <div class="col-2">
        <div class="container card" style="width: 13rem">
          <div class="save-price mt-2 fw-bold">
            <span v-if="product.discountPrice">SAVE Rs {{product.discountPrice}}</span>
            <span v-else>GET {{product.discountPercent}} OFF</span>
          </div>
          <img
            :src="product.image"
            class="card-img-top mt-2"
            alt="product.image"
          />
          <div class="card-body">
            <p class="card-text fw-bold">{{product.name}}</p>
          </div>
          <div class="select-container">
            <select class="form-select" aria-label="Default select example">
              <option v-for="qtyAndPrice in product.qtyAndPrice" :key="qtyAndPrice.id">
                {{qtyAndPrice.qty}} - {{qtyAndPrice.price}} Rs
              </option>
            </select>
          </div>
          <div class="bottom-container mb-3">
          <div class="mt-2">
            <span class="fw-bold">{{product.mrpRup}}</span><br>
            <span v-if="product.exressDelivery" class="express-delivery">{{expressDelivery}}</span>
          </div>
          <div class="d-flex mt-2">
            <div class="input-group mb-3 px-2">
              <span class="input-group-text" id="basic-addon1">Qty</span>
              <input type="text" class="form-control" value="1" />
            </div>
          <div class="px-2">
              <button type="button" class="btn btn-primary">ADD</button>
            </div>
          </div>
          </div>
        </div>
      </div>
</template>

<script>

import { expressDelivery } from "../utils/constants";

export default {
  props: ['product'],
    setup() {
        return { expressDelivery }
    }
}
</script>

<style scoped>

.bottom-container {
  background-color: #E9ECEF ;
}
select,input {
font-size: 13px;
}
.save-price {
  width: auto;
  height: 22px;
  box-shadow: 0 0 10px #87888a;
  color: #ba5253;
  text-align: right;
  padding: 0 10px;
  line-height: 22px;
  font: 10px;
  font-size: 12px;
  /* margin-right: 20px; */
  /* background-color: #E9ECEF; */
}
.express-delivery{
  font-size: 12px;
}

</style>