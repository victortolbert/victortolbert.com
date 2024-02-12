<script setup lang="ts">
import { VisAxis, VisLine, VisXYContainer } from '@unovis/vue'
import { ref } from 'vue'

type DataRecord = { x: number, y: number }

const data = ref<DataRecord[]>([
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 2, y: 1 },
])
</script>

<template>
  <VisXYContainer>
    <VisLine :data="data" :x="d => d.x" :y="d => d.y" />
    <VisAxis type="x" />
    <VisAxis type="y" />
  </VisXYContainer>
</template>
