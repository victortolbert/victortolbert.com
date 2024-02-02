<script setup>
// import { mapState } from 'vuex'

const store = useStore()

// computed: {
//     ...mapState('ui', {
//       activeView: state => state.activeView,
//     }),
// }
</script>

<template>
  <div class="view-switcher">
    <label class="label" for="table-view">View Options</label>

    <div class="icon-button-group">
      <button @click="store.commit('ui/SET_ACTIVE_VIEW', 'grid')">
        <BaseIcon
          :class="`icon ${
            store.state.ui.activeView === 'grid' && 'is-selected'
          }`"
          :name="`${
            store.state.ui.activeView === 'grid' ? 'grid-solid' : 'grid'
          }`"
        />
      </button>

      <button @click="store.commit('ui/SET_ACTIVE_VIEW', 'list')">
        <BaseIcon
          :class="`icon ${
            store.state.ui.activeView === 'list' && 'is-selected'
          }`"
          :name="`${
            store.state.ui.activeView === 'list' ? 'list-solid' : 'list'
          }`"
        />
      </button>
    </div>
  </div>
</template>

<style>
.icon.is-selected {
  color: var(--ds-color-black);
}
</style>
