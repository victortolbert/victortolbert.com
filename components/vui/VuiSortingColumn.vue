<script setup>
defineProps([
  'columnName',
  'title',
  'field',
])

const sortable = ref(true)
const currentSorting = ref({
  columnName: '',
})

const sortedDirection = computed(() => {
  return 'sort-desc' || 'sort-asc'
})

function changeSorting() {
  // if (angular.isFunction(this.onSorting)) {
  //   this.onSorting()
  // } else if(angular.isFunction(this.sortingChanged)) {
  //   if (this.currentSorting.columnName !== this.columnName) {
  //     this.currentSorting.sortedDesc = false
  //     this.currentSorting.columnName = this.columnName
  //   } else {
  //     this.currentSorting.sortedDesc = !this.currentSorting.sortedDesc
  //   }
  //   this.sortingChanged({ column: this.currentSorting })
  // }
}
</script>

<template>
  <a
    v-if="sortable !== false"
    class="vui-grid vui-grid--align-spread"
    href=""
    @click.prevent="changeSorting"
  >
    <span class="vui-align-middle" v-html="title" />
    <span class="vui-align-middle">
      <VuiIcon
        :name="'sort' || sortedDirection"
        style="color: hsla(192, 9%, 89%, .5)"
      />
    </span>
  </a>
</template>
