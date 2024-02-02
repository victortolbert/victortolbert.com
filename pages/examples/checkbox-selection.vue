<script setup>
/**
 * This demo binds an array of booleans to a set of checkboxes using v-model.
 * If all the checkboxes are selected, the "All selected?" tag indicates
 * "true" and turns green. The check for whether everything is selected
 * is a reactive computed.
 * https://mission-patch.com/design?theme=0&color=0&category=0&icon=0&backdrop=0&text1=TEAM+*+STICKERS+*+SMILES&text2=MISSION-PATCH.COM+2019&step=icons
 */
const items = ref([false, false, false])

const allSelected = computed(() => {
  return items.value.every(item => item)
})
</script>

<template>
  <section>
    <div v-for="(item, index) in items" :key="`item-${index}`">
      <div class="field">
        <label>{{ index }}</label>
        <input v-model="items[index]" type="checkbox">
      </div>
    </div>

    <span class="tag">All selected?</span>

    <span
      class="tag"
      :class="[{
        'text-success-500': allSelected,
        'text-danger-500': !allSelected,
      }]"
    >{{ allSelected }}</span>
  </section>
</template>
