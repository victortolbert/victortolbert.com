<script setup>
import { useStore } from 'vuex'
import { currency } from '~/utils/currency'

const store = useStore()

const products = computed(() => {
  return store.state.products.all
})

function addProductToCart(product) {
  store.dispatch('cart/addProductToCart', product)
}

store.dispatch('products/getAllProducts')
</script>

<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id"
    >
      {{ product.title }} - {{ currency(product.price) }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)"
      >
        Add to cart
      </button>
    </li>
  </ul>
</template>
