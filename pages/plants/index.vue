<script setup>
import usePlants from '~/composables/usePlants'

const { fetch, fetchState, filteredPlants, visibility, query } = usePlants()
</script>

<template>
  <div>
    <header class="plants-header">
      <PlantNavbar />

      <section class="hero">
        <form class="form" @submit.prevent="fetch">
          <h1 class="title">
            Can my cat eat that?
          </h1>

          <h2 class="subtitle">
            Search and filter common house plants and see what’s safe for
            Sprinkles to nibble on.
          </h2>

          <div class="search-field">
            <SvgSearchIcon class="search-icon" />

            <input
              v-model="query"
              class="search-input"
              type="search"
              placeholder="Spider plant, fiddle leaf fig, etc..."
            >
          </div>
        </form>
      </section>

      <SvgCatLeft class="cat cat-left" />
      <SvgCatRight class="cat cat-right" />
    </header>

    <section class="section">
      <PlantToolbar />
    </section>

    <!-- <section v-if="noPlants" class="section">
      Sorry, but no plants matched your search criteria
    </section> -->

    <section v-if="fetchState.pending" class="section">
      <i>Searching...</i>
    </section>

    <section v-if="$store.state.ui.activeView === 'list'" class="section">
      <PlantList :plants="filteredPlants" />
    </section>

    <section v-else class="p-6">
      <PlantGrid :plants="filteredPlants" />
    </section>
  </div>
</template>

<style scoped>
.form {
  @apply w-full mx-auto mt-12 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl;
}
.title {
  @apply text-2xl font-bold sm:text-4xl;
}
.hero {
  @apply relative px-4 overflow-hidden  h-80;
}
.hero .subtitle {
  font-size: 1.3125rem;
  max-width: 36rem;
}
.cat-left {
  @apply absolute left-0 hidden origin-left transform scale-75  sm:left-2 lg:left-6 bottom-8 sm:block lg:scale-100;
}
.cat-right {
  @apply absolute hidden origin-right transform scale-75 sm:block -right-5 top-14 lg:scale-100;
}
.plants-header {
  /* bg-sky-blue */
  @apply relative overflow-hidden;
}
</style>
