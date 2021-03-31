<script lang="ts">
import { useSound } from '@vueuse/sound'
import trumpetSfx from '../assets/sound/fanfare.mp3'
import CodeText from './examples/intro.js'

export default {
  setup() {
    const { play, stop } = useSound(trumpetSfx)
    return {
      CodeText,
      play,
      stop,
    }
  },
}
</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="flex justify-center mb-6">
      <vti-Button @mouseover="play" @mouseleave="stop"> 🎺 </vti-Button>
    </div>

    <CodeHeading> Play a sound when hovering the trumpet. </CodeHeading>
    <CodeBlock :codeText="CodeText" />
  </div>
</template>
