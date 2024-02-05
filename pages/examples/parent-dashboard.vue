<script setup>
import { useStore } from 'vuex'
import programs from '~/db/programs.json'

// import ParentDashboardLayout from '~/components/ParentDashboardLayout.vue'

const store = useStore()

// const activePrograms = useStore().getters.activePrograms
const activePrograms = programs

useHead({
  title: 'Active Event Name',
})
</script>

<template>
  <ul class="page min-h-screen">
    <li
      v-for="(program, index) in activePrograms"
      :key="index"
    >
      <!-- :class="program.microsite.microsite_color_theme.theme_name" -->
      <section
        v-show="store.state.activeTab === index"

        class="page min-h-screen"
      >
        <BoosterAppHeader
          :program="program"
          :index="index"
        >
          <BoosterProgramHeader :program="program" />
        </BoosterAppHeader>

        <ParentDashboardLayout
          :program="program"
          class="pt-24 lg:pt-52"
        />
      </section>
    </li>
  </ul>
</template>
