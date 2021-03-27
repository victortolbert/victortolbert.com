<template>
  <div>
    <ul>
      <li
        :class="{active: star <= initialGrade}"
        :key="star"
        v-for="star in maxStars"
        class="star"
      ></li>
    </ul>
    <div class="summary">{{ initialGrade }} of {{ maxStars }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    maxStars: {
      type: Number,
      default: 0,
    },
    initialGrade: {
      type: Number,
      default: 0,
    },
  },
}
</script>
