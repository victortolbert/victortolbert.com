<script>
import { getCurrentInstance, ref } from 'vue'

export default {
  // render(ctx) {
  //   console.log('greet this: ', this)
  //   return h('div', null, `Greet ${this.name}`)
  // },
  setup() {
    const { proxy } = getCurrentInstance()

    const handleClick = () => {
      console.log(proxy.name)
    }

    return {
      handleClick,
      // name: ref('James'),
    }
  },
}
</script>

<template>
  <button @click="handleClick">
    Click
  </button>
</template>
