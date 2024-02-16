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
  layout: 'hancock',
})

const route = useRoute()
const router = useRouter()
const project = reactive({})

watchEffect(() => {
  // if (props.id) {
  //   getProject()
  // }

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
})
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
  <div />
</template>
