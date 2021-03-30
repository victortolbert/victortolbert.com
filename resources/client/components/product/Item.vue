<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
    },
  },
})
</script>

<template>
  <div class="flex space-x-8">
    <div class="w-48 flex-shrink-0">
      <img class="object-contain h-36 w-full" :src="image" :alt="title" />
    </div>
    <div class="flex flex-col items-start text-left">
      <h2 class="text-xl font-semibold mt-4 cursor-pointer hover:text-blue-500">
        <router-link :to="`/products/${id}`"> {{ title }}</router-link>
      </h2>
      <span class="text-gray-500 mb-4">{{ category }}</span>
      <div>
        <span>${{ price }}</span>
      </div>
    </div>
  </div>
</template>
