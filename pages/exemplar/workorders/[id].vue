<script setup>
import ProjectService from '~/services/ProjectService'

defineProps({
  id: {
    type: Number,
  },
})

definePageMeta({
  title: 'Project Details',
  breadcrumb: 'Project Details',
})

const route = useRoute()
const router = useRouter()
const project = reactive({})

ProjectService.getProject(route.params.id)
  .then((response) => {
    project.value = response.data
  })
  .catch((error) => {
    if (error.response && error.response.status === 404) {
      router.push({
        name: '404-resource',
        params: { resource: 'project' },
      })
    }
    else {
      router.push({ name: 'network-error' })
    }
  })
</script>

<template>
  <article class="flex-1">
    <div>
      {{ project.title }}
      <nav class="border-primary-500 flex items-center gap-4 overflow-auto whitespace-nowrap border-b">
        <!-- <NuxtLink
          active-class="text-black border-b-2 border-primary-500"
          class="text-primary-500 hover:border-primary-300 border-b-2 px-2 py-1 hover:border-b-2"
          :to="{ name: 'projects-id', params: { id: $route.params.id } }"
        >
          Details
        </NuxtLink> -->

        <NuxtLink
          exact-active-class="text-black border-b-2 border-primary-500"
          class="text-primary-500 hover:border-primary-300 border-b-2 px-2 py-1 hover:border-b-2"
          :to="{ name: 'projects-id-edit', params: { id: $route.params.id } }"
        >
          Project Details
        </NuxtLink>

        <!-- <NuxtLink
          exact-active-class="text-black border-b-2 border-primary-500"
          class="text-primary-500 hover:border-primary-300 border-b-2 px-2 py-1 hover:border-b-2"
          :to="{ name: 'projects-id-pif', params: { id: $route.params.id } }"
        >
          Property Inspection
        </NuxtLink> -->

        <NuxtLink
          exact-active-class="text-black border-b-2 border-primary-500"
          class="text-primary-500 hover:border-primary-300 border-b-2 px-2 py-1 hover:border-b-2"
          :to="{ name: 'projects-id-comments', params: { id: $route.params.id } }"
        >
          Project Comments
        </NuxtLink>
        <NuxtLink
          exact-active-class="text-black border-b-2 border-primary-500"
          class="text-primary-500 hover:border-primary-300 border-b-2 px-2 py-1 hover:border-b-2"
          :to="{ name: 'projects-id-history', params: { id: $route.params.id } }"
        >
          Project History
        </NuxtLink>
        <NuxtLink
          exact-active-class="text-black border-b-2 border-primary-500"
          class="text-primary-500 hover:border-primary-300 border-b-2 px-2 py-1 hover:border-b-2"
          :to="{ name: 'projects-id-service-types', params: { id: $route.params.id } }"
        >
          Project Service Types
        </NuxtLink>
        <NuxtLink
          exact-active-class="text-black border-b-2 border-primary-500"
          class="text-primary-500 hover:border-primary-300 border-b-2 px-2 py-1 hover:border-b-2"
          :to="{ name: 'projects-id-communication', params: { id: $route.params.id } }"
        >
          Project Communication
        </NuxtLink>
      </nav>

      <section class="mt-8">
        <NuxtPage />
      </section>
    </div>
  </article>
</template>
