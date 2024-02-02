<script setup>
defineProps({
  plant: {
    type: Object,
    default: () => ({
      image: 'images/no-image.jpeg',
    }),
  },
})
</script>

<template>
  <div class="media-object">
    <header class="image-container">
      <PlantDetailButton :plant-id="plant.id">
        <img
          class="image"
          :src="`/plants/${plant.image}`"
          :alt="`Image of ${plant.names.common}`"
        >
      </PlantDetailButton>
    </header>

    <div class="text-container">
      <PlantDetailButton :plant-id="plant.id" class="title">
        {{ plant.names.common }}
      </PlantDetailButton>

      <p class="subtitle">
        {{ plant.names.scientific }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.media-object {
  display: flex;
  flex-direction: row;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
}
.image-container {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.image {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: var(--ds-border-rounded-full);

  @media (min-width: 640px) {
    width: 3rem;
    height: 3rem;
  }
}

.text-container {
  margin-top: 1rem;
  margin-top: 0px;
  margin-left: 1rem;
}

.title {
  text-align: left;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  line-height: 1;
}
.subtitle {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-style: italic;
}
</style>
