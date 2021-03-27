<script lang="ts">
export default {
  props: {
    isUnsplash: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      photoIds: [
        '1505904267569-f02eaeb45a4c',
        '1494451930944-8998635c2123',
        '1517365830460-955ce3ccd263',
      ],
      ixlib: 'rb-1.2.1',
      auto: 'format',
      fit: 'crop', // facearea
      facepad: 4,
      width: 1908,
      height: 256,
      quality: 80,
      ixids: [
        'eyJhcHBfaWQiOjEyMDd9',
        'MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw',
        'eyJhcHBfaWQiOjEyMDd9',
      ],
    }
  },
  computed: {
    src() {
      return this.isUnsplash
        ? `https://images.unsplash.com/photo-${this.photoIds[1]}?ixlib=rb-1.2.1&amp;ixid=${this.ixids[1]}&amp;auto=format&amp;fit=${this.fit}&amp;w=${this.width}&amp;q=${this.quality}&amp;sat=-100`
        : 'https://cominex.net/assets/img/background.jpg'
    },
  },
}
</script>

<template>
  <img :src="src" />
</template>
