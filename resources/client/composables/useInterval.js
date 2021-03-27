import {onMounted, onUnmounted} from 'vue'

export const useInterval = (intervalInSeconds, intervalAction) => {
  let intervalListener = null

  onMounted(() => {
    intervalListener = setInterval(intervalAction, intervalInSeconds * 1000)
  })

  onUnmounted(() => {
    if (!intervalListener) return

    clearInterval(intervalListener)
  })
}
