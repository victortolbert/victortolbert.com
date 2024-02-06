import { onBeforeUnmount } from 'vue'

export const useKeydown = function (keyCombos: any) {
  const onkey = function (event: any) {
    const kc = keyCombos.find(({ key, fn }: any) => key === event.key)

    if (kc)
      kc.fn()
  }

  window.addEventListener('keydown', onkey)

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onkey)
  })
}

export default useKeydown
