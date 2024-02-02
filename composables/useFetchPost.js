export function useFetchPost() {
  // Request States
  const REQUEST_IN_PROGRESS = 'REQUEST_IN_PROGRESS'
  const REQUEST_ERROR = 'REQUEST_ERROR'
  const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
  const requestState = ref(null)
  const loading = computed(() => requestState.value === REQUEST_IN_PROGRESS)
  const error = computed(() => requestState.value === REQUEST_ERROR)

  // Post
  const post = ref(null)
  const fetchPost = async (id) => {
    post.value = null
    requestState.value = REQUEST_IN_PROGRESS
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      post.value = await res.json()
      requestState.value = REQUEST_SUCCESS
    }
    catch (error) {
      requestState.value = REQUEST_ERROR
    }
  }

  return { post, loading, error, fetchPost }
}
