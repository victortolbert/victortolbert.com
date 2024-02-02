<script setup>
import { useStore } from 'vuex'
import { currency } from '~/utils/currency'

const store = useStore()

const checkoutStatus = computed(() => {
  return store.state.cart.checkoutStatus
})

const products = computed(() => {
  return store.getters['cart/cartProducts']
})

const total = computed(() => {
  return store.getters['cart/cartTotalPrice']
})

function checkout(products) {
  store.dispatch('cart/checkout', products)
}
</script>

<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length">
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ currency(product.price) }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ currency(total) }}</p>
    <p>
      <button :disabled="!products.length" @click="checkout(products)">
        Checkout
      </button>
    </p>
    <p v-show="checkoutStatus">
      Checkout {{ checkoutStatus }}.
    </p>
  </div>
</template>
