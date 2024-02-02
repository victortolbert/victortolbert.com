const filters = {
  all(projects) {
    return projects
  },
  toxic(projects) {
    return projects.filter((project) => {
      return project.toxicity
    })
  },
  'non-toxic': function (projects) {
    return projects.filter((project) => {
      return !project.toxicity
    })
  },
  completed(projects) {
    return projects.filter((project) => {
      return project.isCompleted
    })
  },
}

export default function useProjects() {
  const projects = ref([])
  const isLoading = ref(true)
  const visibility = ref('all')
  const query = ref('')

  // const { fetch, fetchState } = useFetch(async () => {
  //   projects.value = await $axios.$get(`projects`)
  // })

  const filteredProjects = computed(() => {
    return filters[visibility.value](projects.value)
  })

  provide('visibility', visibility)

  return {
    fetch,
    fetchState,
    projects,
    visibility,
    query,
    isLoading,
    filteredProjects,
  }
}
