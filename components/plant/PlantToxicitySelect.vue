<script setup>
// import { mapState } from 'vuex'

const visibility = inject('visibility')

// computed: {
//   ...mapState({
//     category: state => state.ui.category,
//   }),
// }

function updateCategory(event) {
  store.commit('ui/UPDATE_CATEGORY', event.target.value)

  visibility.value = event.target.value
}
</script>

<template>
  <div>
    <label for="location" class="label">Toxicity</label>
    <select
      id="location"
      name="location"
      class="select-input"
      @change="updateCategory"
    >
      <option value="all">
        Select an option
      </option>
      <option value="toxic">
        Toxic
      </option>
      <option value="non-toxic">
        Non-toxic
      </option>
    </select>
  </div>
</template>
