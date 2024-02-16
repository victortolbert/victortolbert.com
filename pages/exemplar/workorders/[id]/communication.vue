<script setup>
import ProjectService from '~/services/ProjectService'

defineProps({
  id: {
    type: Number,
  },
})

definePageMeta({
  title: 'Communication',
  layout: 'hancock',
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

const links = [
  {
    label: 'Project Created',
    to: '/projects/1154912/communication/project-created',
    exact: () => true,
  },
  {
    label: 'Email Inspection Assigned',
    to: '/projects/1154912/communication/inspection-assigned',
    exact: true,
  },
  {
    label: 'Project Comment...',
    to: '/projects/1154912/communication/project-comment',
    exact: true,
  },
]
</script>

<template>
  <div class="">
    <div>
      <!-- <UVerticalNavigation :links="links" /> -->
    </div>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>
