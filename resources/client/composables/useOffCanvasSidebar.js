import {ref, watchEffect} from 'vue'

export default function useOffCanvasSidebar() {
  const sidebarOpen = ref(false)

  watchEffect(() => sidebarOpen.value)

  return {
    sidebarOpen,
  }
}
