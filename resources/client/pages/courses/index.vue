<!-- @vue-ignore -->
<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted } from 'vue'
import { fetchCourses } from '~/api/courseApi'

const useCoursesSort = courses => {
  const sortBy = ref('asc')
  const sortByAscending = (a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  }

  const sortByDescending = (a, b) => {
    if (a < b) return 1
    if (a > b) return -1
    return 0
  }

  const sortedCourses = computed(() => {
    let coursesCopy = [...courses.value]
    coursesCopy.sort((a, b) => {
      const titleA = a.title.toLowerCase()
      const titleB = b.title.toLowerCase()
      if (sortBy.value === 'asc') {
        return sortByAscending(titleA, titleB)
      } else {
        return sortByDescending(titleA, titleB)
      }
    })
    return coursesCopy
  })
  return { sortBy, sortedCourses }
}

const useCoursesFilter = courses => {
  const courseQuery = ref('')
  const filteredCourses = computed(() => {
    if (!courseQuery.value) return courses.value
    const query = courseQuery.value.toLowerCase()
    return courses.value.filter(({ title }) =>
      title.toLowerCase().includes(query)
    )
  })

  return {
    courseQuery,
    filteredCourses,
  }
}

export default defineComponent({
  setup() {
    const courses = ref([])
    const { courseQuery, filteredCourses } = useCoursesFilter(courses)
    const { sortBy, sortedCourses } = useCoursesSort(filteredCourses)
    const initFetchCourses = async () => {
      courses.value = await fetchCourses()
    }
    watch(courseQuery, (newQuery, oldQuery) => {
      console.log(`New query: ${newQuery}. Old Query: ${oldQuery}`)
    })
    onMounted(() => {
      initFetchCourses()
    })

    return {
      courses,
      courseQuery,
      sortBy,
      filteredCourses,
      sortedCourses,
    }
  },
})
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-semibold mb-8">Courses</h1>

    <form
      class="w-2/3 mx-auto text-left mb-16 flex space-x-6"
      autocomplete="off"
    >
      <div class="flex-grow">
        <label class="block mb-2" for="courses-filter">Filter courses</label>
        <input
          v-model="courseQuery"
          id="courses-filter"
          type="text"
          class="w-full shadow border border-gray-300 p-3 rounded"
        />
      </div>
      <div class="flex-grow">
        <label class="block mb-2" for="courses-sort">Sort</label>
        <select
          v-model="sortBy"
          id="courses-sort"
          class="w-full shadow border border-gray-300 p-3 rounded"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </form>
    <div class="grid grid-cols-12 gap-8 relative">
      <div class="space-y-8 col-span-8">
        <CourseItem
          v-for="course of sortedCourses"
          :key="course.id"
          v-bind="course"
        />
      </div>
      <div class="col-span-4">
        <div class="sticky top-0">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
