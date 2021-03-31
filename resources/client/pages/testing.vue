
<script lang='ts'>
import { defineComponent } from 'vue'
import { useMouse, useCounter } from '@vueuse/core'
import { useSound } from '@vueuse/sound'
import buttonSfx from '../assets/sound/glug.mp3'

export default defineComponent({
  setup() {
    const { play } = useSound(buttonSfx)
    const { x, y } = useMouse()
    const { count, inc, dec } = useCounter()

    return {
      play, x, y, count, inc, dec
    }
  }
})
</script>


<template>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
  <h3>
    Counter: {{ count }}
    <a style="margin-right:10px" @click="inc()">+</a>
    <a @click="dec()">-</a>
  </h3>

  <button @click="play">Play a sound</button>
<!--
  src/pages/users/[id].vue -> /users/:id (/users/one)
  src/[user]/settings.vue -> /:user/settings (/one/settings)

  Any dynamic parameters will be passed to the page as props.

  For example, given the file `src/pages/users/[id].vue`,
  the route `/users/abc` will be passed the following props:

  { "id": "abc" }
-->
</template>
