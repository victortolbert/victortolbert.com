<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchCourseById } from '~/api/courseApi'

export default defineComponent({
  setup() {
    const course = ref(null)
    const route = useRoute()
    const initFetchCourseById = async id => {
      course.value = await fetchCourseById(parseInt(id))
    }

    watch(() => route.params.id, initFetchCourseById)

    onMounted(() => {
      initFetchCourseById(route.params.id)
    })

    return {
      course,
    }
  },
})
</script>

<template>
  <div class="text-left pt-4">
    <h2 class="text-xl font-semibold mb-4">Selected course</h2>

    <div v-if="course">
      <h3 class="text-lg mb-4 border-b pb-3">{{ course.title }}</h3>

      <div>{{ course.description }}</div>

      <CourseLessonList />
    </div>

    <p v-else>No course selected</p>
  </div>
</template>
