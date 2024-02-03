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

export function useHowler() {
  return {
    isPlaying,
    play,
    pause,
    toggle,
  }
}
