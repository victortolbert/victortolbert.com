<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'ResourceFinder',
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 2500)
  },
  computed: {
    filteredResources() {
      switch (this.filter) {
        case 'featured':
          return this.$store.state.resources.filter(resource => {
            return resource.isFeatured
          })
        case 'faster':
          return [...this.$store.state.resources].sort((a, b) => a.time - b.time)
        default:
          return this.$store.state.resources
      }
    },
  },
  data() {
    return {
      isOpen: -1,
      filter: 'all',
      isLoading: true,
    }
  },
})
</script>

<template>
  <div class="divide-y divide-gray-100 border-b border-gray-100">
    <div class="flex space-x-2 py-3">
      <ORadio
        v-model="filter"
        name="all"
        native-value="all"
        @click.native="isOpen = -1"
      >
        All
      </ORadio>
      <ORadio
        v-model="filter"
        name="featured"
        native-value="featured"
        @click.native="isOpen = -1"
      >
        Featured
      </ORadio>
      <ORadio
        v-model="filter"
        name="faster"
        native-value="faster"
        @click.native="isOpen = -1"
      >
        Faster
      </ORadio>
    </div>

    <article
      class="p-4 flex space-x-4"
      v-for="(resource, index) of filteredResources"
      :class="{hidden: !isLoading}"
      :key="`loading-${index}`"
    >
      <div>
        <OSkeleton circle width="64px" height="64px" />
      </div>
      <div class="w-full">
        <OSkeleton width="100%" />
        <OSkeleton width="100%" />
        <OSkeleton width="100%" />
      </div>
    </article>

    <OCollapse
      animation="slide"
      v-for="(resource, index) of filteredResources"
      :class="{hidden: isLoading}"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index"
    >
      <article
        slot="trigger"
        slot-scope="props"
        class="card-header p-4 flex space-x-4 text-main dark:text-main-dark"
      >
        <ResourceImage
          :src="resource.image"
          :alt="`Image for resource ${resource.title}`"
        />
        <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
          <h2 class="text-lg font-semibold mb-0.5">
            {{ resource.title }}
          </h2>
          <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
            <div>
              <dt class="sr-only">Time</dt>
              <dd>
                <abbr :title="`${resource.time} minutes`"
                  >{{ resource.time }}m</abbr
                >
              </dd>
            </div>
            <div>
              <dt class="sr-only">Difficulty</dt>
              <dd>· {{ resource.difficulty | difficulty }}</dd>
            </div>
            <div>
              <dt class="sr-only">Servings</dt>
              <dd>· {{ resource.servings }} servings</dd>
            </div>
            <div class="flex-none w-full mt-0.5 font-normal">
              <dt class="inline mr-1">By</dt>
              <dd class="inline">{{ resource.author }}</dd>
            </div>
            <div
              class="absolute top-0 right-0 rounded-full px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1"
            >
              <dt class="">
                <o-icon
                  :icon="props.open ? 'caret-up' : 'caret-down'"
                  size="large"
                />
              </dt>
            </div>
          </dl>
        </div>
      </article>
      <div class="text-main dark:text-main-dark">
        <div class="p-4">
          {{ resource.procedure }}
        </div>
      </div>
    </OCollapse>
  </div>
</template>
