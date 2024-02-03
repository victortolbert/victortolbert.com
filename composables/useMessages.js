import { strip } from '~/lib/helpers'

const route = useRoute()

export default function useMessages() {
  const messages = ref([])
  const checked = ref([])
  const isCheckAll = ref(false)

  // useFetch(async () => {
  //   messages.value = await app.$api.messages.index()
  // })

  const filteredMessages = computed(() => {
    if (route.value.params.tag) {
      return messages.value.filter(message =>
        message.tags.includes(route.value.params.tag),
      )
    }
    return messages.value
  })

  const tags = computed(() =>
    messages.value
      .map(message => message.tags)
      .flat()
      .reduce((obj, tag) => {
        if (!obj[tag])
          obj[tag] = 0

        obj[tag]++
        return obj
      }, {}),
  )

  function removeMessage(index) {
    messages.value.splice(index, 1)
  }

  function removeMessages() {
    messages.value = []
  }

  function markAllRead() {
    messages.value.forEach(message => (message.hasBeenRead = true))
  }

  function checkAll() {
    isCheckAll.value = !isCheckAll.value
    checked.value = []

    if (isCheckAll.value) {
      for (const key in messages.value)
        checked.value.push(messages.value[key])
    }
  }

  function updateCheckAll() {
    if (checked.value.length === messages.value.length)
      isCheckAll.value = true
    else
      isCheckAll.value = false
  }

  function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(date).toLocaleDateString('en', options)
  }

  function truncate(str) {
    return `${strip(str).substr(0, 50)}...`
  }

  return {
    messages,
    checked,
    isCheckAll,
    tags,
    checkAll,
    updateCheckAll,
    truncate,
    formatDate,
    removeMessage,
    removeMessages,
    filteredMessages,
    markAllRead,
  }
}
