<script setup>
import { useStore } from 'vuex'

definePageMeta({
  title: 'Add an project',
  breadcrumb: 'Add an project',
})

const store = useStore()

const times = []
const project = ref(createFreshProjectObject())

for (let i = 1; i <= 24; i++)
  times.push(`${i}:00`)

// times

const categories = store.state.categories

function createProject() {
  store.dispatch('project/createProject', project.value)
    .then(() => {
      router.push({
        name: 'projects-id',
        params: { id: project.value.id },
      })
      project.value = createFreshProjectObject()
    })
    .catch(() => {})
}

function createFreshProjectObject() {
  const user = store.state.user.user
  const id = Math.floor(Math.random() * 10000000)

  return {
    id,
    user,
    category: '',
    organizer: user,
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    attendees: [],
  }
}
</script>

<template>
  <form class="prose dark:prose-invert" @submit.prevent="createProject">
    <h3>Name & describe your project</h3>

    <fieldset class="grid gap-8">
      <UFormGroup name="title" label="Title">
        <UInput v-model="project.title" />
      </UFormGroup>

      <div class="max-w-xs">
        <UFormGroup name="category" label="Select a category">
          <USelect
            v-model="project.category"
            :options="categories"
          />
        </UFormGroup>
      </div>

      <UFormGroup name="description" label="Description">
        <UTextarea v-model="project.description" placeholder="Add a description" />
      </UFormGroup>
    </fieldset>

    <h3>Where is your project?</h3>

    <UFormGroup name="location" label="Location">
      <UInput v-model="project.location" placeholder="Add a location" />
    </UFormGroup>

    <h3>When is your project?</h3>

    <fieldset class="grid grid-cols-2 gap-8">
      <UFormGroup name="date" label="Date">
        <datepicker v-model="project.date" placeholder="Select a date" />
      </UFormGroup>
      <UFormGroup name="time" label="Select a time">
        <USelect
          v-model="project.time"
          :options="times"
        />
      </UFormGroup>
    </fieldset>

    <div class="mt-8">
      <UButton type="submit">
        Submit
      </UButton>
    </div>
  </form>
</template>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
