<script>
import { mapMutations } from 'vuex'
import { defineComponent } from 'vue'
import { useMessages } from '~/composables/useMessages'

export default defineComponent({
  setup() {
    const { tags } = useMessages()

    return {
      tags,
    }
  },
  data() {
    return {
      links: [{ title: 'Inbox', to: { name: 'index' }, icon: 'inbox' }],
    }
  },
  methods: {
    ...mapMutations(['closeMenu']),
  },
})
</script>

<template>
  <div class="space-y-1">
    <NuxtLink exact to="/examples/messages" class="nav-link inbox" @click="closeMenu">
      <UIcon name="i-mdi-inbox" class="mr-1 text-2xl" />
      Inbox
    </NuxtLink>
    <NuxtLink
      v-for="(count, tag) in tags"
      :key="tag"
      exact
      :to="`/examples/messages/tags/${tag}`"
      :class="tag"
      class="nav-link"
      @click="closeMenu"
    >
      <UIcon name="i-mdi-inbox" class="mr-1 text-2xl" />
      <span class="w-full flex items-center justify-between capitalize">
        <span class="flex-1">{{ tag }}</span>
        <span
          class="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-600"
        >
          {{ count }}
        </span>
      </span>
    </NuxtLink>
  </div>
</template>

<style>
.nav-link {
  /* group */
  @apply flex rounded-r-full py-1 pl-6 flex items-center px-2 py-2 font-medium text-gray-900 transition duration-150 ease-in-out  rounded-md  focus:outline-none focus:bg-gray-50;
}

.nav-link:hover {
  @apply bg-gray-200;
}

.nav-link.is-active {
  @apply font-bold text-black bg-gray-200;
}

.nav-link.inbox {
  @apply text-red-500;
}

.nav-link.inbox.is-active {
  @apply text-red-500 bg-red-100;
}

span.travel {
  @apply text-white bg-green-500;
}

span.work {
  @apply text-white bg-blue-500;
}

.nav-link.work {
  @apply text-blue-500;
}

.nav-link.travel {
  @apply text-green-500;
}

.nav-link.work.is-active {
  @apply text-blue-500 bg-blue-100;
}

.nav-link.travel.is-active {
  @apply text-green-500 bg-green-100;
}
</style>
