import {onBeforeUnmount} from 'vue'

export const useKeydown = function (keyCombos) {
  const onkey = function (event) {
    const kc = keyCombos.find(({key, fn}) => key === event.key)
    if (kc) kc.fn()
  }

  window.addEventListener('keydown', onkey)

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', onkey)
  })
}

export default useKeydown
