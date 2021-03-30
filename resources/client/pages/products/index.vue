<!-- @vue-ignore -->
<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted } from 'vue'
import { fetchProducts } from '~/api/productApi'

const useProductsSort = products => {
  const sortBy = ref('asc')
  const sortByAscending = (a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  }

  const sortByDescending = (a, b) => {
    if (a < b) return 1
    if (a > b) return -1
    return 0
  }

  const sortedProducts = computed(() => {
    let productsCopy = [...products.value]
    productsCopy.sort((a, b) => {
      const titleA = a.title.toLowerCase()
      const titleB = b.title.toLowerCase()
      if (sortBy.value === 'asc') {
        return sortByAscending(titleA, titleB)
      } else {
        return sortByDescending(titleA, titleB)
      }
    })
    return productsCopy
  })
  return { sortBy, sortedProducts }
}

const useProductsFilter = products => {
  const productQuery = ref('')
  const filteredProducts = computed(() => {
    if (!productQuery.value) return products.value
    const query = productQuery.value.toLowerCase()
    return products.value.filter(({ title }) =>
      title.toLowerCase().includes(query)
    )
  })

  return {
    productQuery,
    filteredProducts,
  }
}

export default defineComponent({
  setup() {
    const products = ref([])
    const { productQuery, filteredProducts } = useProductsFilter(products)
    const { sortBy, sortedProducts } = useProductsSort(filteredProducts)
    const initFetchProducts = async () => {
      products.value = await fetchProducts()
    }
    watch(productQuery, (newQuery, oldQuery) => {
      console.log(`New query: ${newQuery}. Old Query: ${oldQuery}`)
    })
    onMounted(() => {
      initFetchProducts()
    })

    return {
      products,
      productQuery,
      sortBy,
      filteredProducts,
      sortedProducts,
    }
  },
})
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-8">Products</h1>

    <form
      class="w-2/3 mx-auto text-left mb-16 flex space-x-6"
      autocomplete="off"
    >
      <div class="flex-grow">
        <label class="block mb-2" for="products-filter">Filter products</label>
        <input
          v-model="productQuery"
          id="products-filter"
          type="text"
          class="w-full shadow border border-gray-300 p-3 rounded"
        />
      </div>
      <div class="flex-grow">
        <label class="block mb-2" for="products-sort">Sort</label>
        <select
          v-model="sortBy"
          id="products-sort"
          class="w-full shadow border border-gray-300 p-3 rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </form>
    <div class="grid grid-cols-12 gap-8 relative">
      <div class="space-y-8 col-span-8">
        <ProductItem
          v-for="product of sortedProducts"
          :key="product.id"
          v-bind="product"
        />
      </div>
      <div class="col-span-4">
        <div class="sticky top-0">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
