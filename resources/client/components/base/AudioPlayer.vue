<!-- @vue-ignore -->
<script lang="ts">
//import { mapState } from 'vuex'
export default {
  props: ['url', 'playerid'],
  /**
   * playbackTime = local var that syncs to audio.currentTime
   * audioDuration = duration of audio file in seconds
   * isPlaying = boolean (true if audio is playing)
   *
   **/
  data() {
    return {
      playbackTime: 0,
      audioDuration: 100,
      audioLoaded: false,
      isPlaying: false,
    }
  },
  methods: {
    // Set the range slider max value equal to audio duration
    initSlider() {
      const audio = this.$refs.player

      if (audio) {
        this.audioDuration = Math.round(audio.duration)
      }
    },

    // Convert audio current time from seconds to min:sec display
    convertTime(seconds) {
      const format = val => `0${Math.floor(val)}`.slice(-2)
      const hours = seconds / 3600
      const minutes = (seconds % 3600) / 60

      return [minutes, seconds % 60].map(format).join(':')
    },

    // Show the total duration of audio file
    totalTime() {
      const audio = this.$refs.player

      if (audio) {
        const seconds = audio.duration

        return this.convertTime(seconds)
      } else {
        return '00:00'
      }
    },

    // Display the audio time elapsed so far
    elapsedTime() {
      const audio = this.$refs.player
      if (audio) {
        const seconds = audio.currentTime
        return this.convertTime(seconds)
      } else {
        return '00:00'
      }
    },

    // Playback listener function runs every 100ms while audio is playing
    playbackListener(e) {
      const audio = this.$refs.player

      // Sync local 'playbackTime' var to audio.currentTime and update global state
      this.playbackTime = audio.currentTime

      // console.log("update: " + audio.currentTime);
      // Add listeners for audio pause and audio end events
      audio.addEventListener('ended', this.endListener)
      audio.addEventListener('pause', this.pauseListener)
    },

    // Function to run when audio is paused by user
    pauseListener() {
      this.isPlaying = false
      this.listenerActive = false
      this.cleanupListeners()
    },

    // Function to run when audio play reaches the end of file
    endListener() {
      this.isPlaying = false
      this.listenerActive = false
      this.cleanupListeners()
    },

    // Remove listeners after audio play stops
    cleanupListeners() {
      const audio = this.$refs.player
      audio.removeEventListener('timeupdate', this.playbackListener)
      audio.removeEventListener('ended', this.endListener)
      audio.removeEventListener('pause', this.pauseListener)
      // console.log("All cleaned up!");
    },

    toggleAudio() {
      const audio = this.$refs.player
      // var audio = document.getElementById("audio-player");
      if (audio.paused) {
        audio.play()
        this.isPlaying = true
      } else {
        audio.pause()
        this.isPlaying = false
      }
    },
  },

  mounted() {
    // nextTick code will run only after the entire view has been rendered
    this.$nextTick(function () {
      const audio = this.$refs.player

      // Wait for audio to load, then run initSlider() to get audio duration and set the max value of our slider
      // "loademetadata" Event https://www.w3schools.com/tags/av_event_loadedmetadata.asp
      audio.addEventListener(
        'loadedmetadata',
        function (e) {
          this.initSlider()
        }.bind(this),
      )

      // "canplay" HTML Event lets us know audio is ready for play https://www.w3schools.com/tags/av_event_canplay.asp
      audio.addEventListener(
        'canplay',
        function (e) {
          this.audioLoaded = true
        }.bind(this),
      )
      //Wait for audio to begin play, then start playback listener function
      this.$watch('isPlaying', function () {
        if (this.isPlaying) {
          var audio = this.$refs.player
          this.initSlider()
          //console.log("Audio playback started.");
          //prevent starting multiple listeners at the same time
          if (!this.listenerActive) {
            this.listenerActive = true
            //for a more consistent timeupdate, include freqtimeupdate.js and replace both instances of 'timeupdate' with 'freqtimeupdate'
            audio.addEventListener('timeupdate', this.playbackListener)
          }
        }
      })
      //Update current audio position when user drags progress slider
      this.$watch('playbackTime', function () {
        var audio = this.$refs.player
        var diff = Math.abs(this.playbackTime - this.$refs.player.currentTime)

        //Throttle synchronization to prevent infinite loop between playback listener and this watcher
        if (diff > 0.01) {
          this.$refs.player.currentTime = this.playbackTime
        }
      })
    })
  },
}
</script>

<template>
  <div>
    <!-- https://www.w3schools.com/tags/ref_av_dom.asp -->
    <!-- https://github.com/muhammadatt/vue-audio-player -->
    <audio ref="player" id="audio-player">
      <source :src="url" type="audio/mpeg" />
    </audio>
    <button @click="toggleAudio()">Play/Pause</button>
  </div>
</template>


<style>
/* Play/Pause Button */
.play-button {
  height: 45px;
}
input[type='range'] {
  margin: auto;
  -webkit-appearance: none;
  position: relative;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 0; /* iOS */
  background: transparent;
}
input[type='range']:focus {
  outline: none;
}
::-webkit-slider-runnable-track {
  background: #fff;
}
/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 */
::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 0; /* 1 */
  height: 40px;
  background: #fff;
  box-shadow: -100vw 0 0 100vw dodgerblue;
  border: none; /* 2px solid #999; */
}
::-moz-range-track {
  height: 40px;
  background: #ddd;
}
::-moz-range-thumb {
  background: #fff;
  height: 40px;
  width: 0; /* 20px; */
  border: none; /* 3px solid #999; */
  border-radius: 0 !important;
  box-shadow: -100vw 0 0 100vw dodgerblue;
  box-sizing: border-box;
}
::-ms-fill-lower {
  background: dodgerblue;
}
::-ms-thumb {
  background: #fff;
  border: 2px solid #999;
  height: 40px;
  width: 20px;
  box-sizing: border-box;
}
::-ms-ticks-after {
  display: none;
}
::-ms-ticks-before {
  display: none;
}
::-ms-track {
  background: #ddd;
  color: transparent;
  height: 40px;
  border: none;
}
::-ms-tooltip {
  display: none;
}
</style>
