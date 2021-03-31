
<script setup lang='ts'>
import { ref } from 'vue'
import { useMouse, useMediaControls, useCounter, usePreferredDark, useLocalStorage } from '@vueuse/core'
import { useAxios } from '@vueuse/integrations'
import ComponentA from '../../../README.md'

const { x, y } = useMouse()
const video = ref()
const loop = ref(false)
const { count, inc, dec } = useCounter()
const isDark = usePreferredDark()
const { playing, currentTime, duration } = useMediaControls(video, {
  src: 'overview.mp4',
  loop,
})

const store = useLocalStorage(
  'my-storage',
  {
    name: 'Apple',
    color: 'red',
  },
)
const { data, loading, finished } = useAxios('http://localhost:3006/posts/1')
const text = JSON.stringify(data)
</script>

<template>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
  <h3>
    Counter: {{ count }}
    <a style="margin-right:10px" @click="inc()">+</a>
    <a @click="dec()">-</a>
  </h3>
  <pre>{{ store }}</pre>

  <p>{{ isDark }}</p>
  <ComponentA style="padding: 20px 40px" />

  <video ref="video" />

  <button @click="playing = !playing">
    Play / Pause
  </button>
  <span>{{ currentTime }} / {{ duration }}</span>
  <button @click="loop = !loop">
    Toggle Loop
  </button>

  <!--
      src/pages/users/[id].vue -> /users/:id (/users/one)
    src/[user]/settings.vue -> /:user/settings (/one/settings)
Any dynamic parameters will be passed to the page as props. For example, given the file src/pages/users/[id].vue, the route /users/abc will be passed the following props:

{ "id": "abc" }
-->
  <note>Loading: {{ loading.toString() }}</note>
  <note>Finished: {{ finished.toString() }}</note>
  <!-- <pre lang="yaml">{{ text }}</pre> -->
  {{ data }}
</template>
