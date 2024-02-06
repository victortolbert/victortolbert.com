<script setup>
import { Howl } from 'howler'
import music from '~/assets/music/let-it-fall-low-pitch.mp3'

const sound = new Howl({
  src: [music],
  html5: true,
})

const isPlaying = ref(false)

function play() {
  isPlaying.value = true
  sound.play()
}

function pause() {
  isPlaying.value = false
  sound.pause()
}

function toggle() {
  if (isPlaying.value)
    pause()
  else
    play()
}

const footerRef = ref(null)

const items = [
  {
    name: 'Resume',
    path: '/',
    icon: 'ph:read-cv-logo-duotone',
  },
  {
    name: 'Projects',
    path: '/projects',
    icon: 'ph:folder-notch-open-duotone',
  },
  {
    name: 'Articles',
    path: '/articles',
    icon: 'ph:newspaper-duotone',
  },
  {
    name: 'Lab',
    path: '/lab',
    icon: 'ph:flask-duotone',
  },
  {
    name: 'Uses',
    path: '/uses',
    icon: 'ph:backpack-duotone',
  },
  {
    name: 'Bookmarks',
    path: '/bookmarks',
    icon: 'ph:bookmarks-simple-duotone',
  },
  {
    name: 'About Me',
    path: '/about',
    icon: 'ph:question-duotone',
  },
]
</script>

<template>
  <footer ref="footerRef" class="flex items-center w-full mx-auto justify-between max-w-3xl">
    <NuxtLink to="/" class="text-sm text-gray-500">
      © 2024 Victor Tolbert. All rights reserved.
    </NuxtLink>

    <div class="flex items-center gap-1.5">
      <UTooltip text="Toggle Music" :ui="{ popper: { strategy: 'absolute' } }">
        <button @click="toggle()">
          <Icon
            aria-hidden="true"
            :name="isPlaying ? 'i-ph-pause-circle-duotone' : 'i-ph-play-circle-duotone'"
            class="w-5 h-5"
          />
        </button>
      </UTooltip>
      <AppThemeToggle />
    </div>
  </footer>
</template>
