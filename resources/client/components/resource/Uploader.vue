<!-- @vue-ignore -->
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'ResourceUploader',

  data() {
    return {
      file: null,
      isLoading: false,
      resource: {
        title: null,
        author: null,
        time: 5,
        image: null,
        servings: 1,
        difficulty: 'easy',
        procedure: '',
      },
      errors: {
        title: null,
        author: null,
        image: null,
        procedure: null,
        time: null,
        servings: null,
      },
    }
  },
  watch: {
    file(newFile) {
      this.resource.image = window.URL.createObjectURL(newFile)
    },
  },
  methods: {
    _validateResource() {
      let isValid = true
      for (const key in this.errors) {
        this.errors[key] = null
        if (!this.resource[key]) {
          this.errors[key] = 'This field cannot be empty'
          isValid = false
        }
        if ((key === 'servings' || key === 'time') && this.resource[key] < 1) {
          this.errors[key] = 'This field should be at least 1'
          isValid = false
        }
      }
      return isValid
    },
    addResource() {
      this.isLoading = true
      if (this._validateResource()) {
        setTimeout(() => {
          this.$store.commit('ADD_RESOURCE', this.resource)

          this.resource = {
            title: '',
            author: '',
            time: 5,
            image: null,
            servings: 1,
            difficulty: 'easy',
            procedure: '',
          }
          this.isLoading = false
        }, 2000)
      } else {
        this.isLoading = false
      }
    },
  },
})
</script>

<template>
  <form
    class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:shadow-md rounded sm:px-8 sm:pt-6 pb-8 mb-4 text-main"
  >
    <div class="mb-4 col-start-1 md:col-end-3">
      <OField
        label="Title"
        label-for="name"
        :variant="errors.title ? 'danger' : ''"
        :message="errors.title"
      >
        <OInput
          id="title"
          type="text"
          placeholder="Name of your resource (e.g. Pizza)"
          v-model="resource.title"
        />
      </OField>
    </div>

    <div class="mb-4 col-start-1 md:col-end-3">
      <OField
        label="Author"
        label-for="author"
        :variant="errors.author ? 'danger' : ''"
        :message="errors.author"
      >
        <OInput
          id="author"
          type="text"
          placeholder="Author name (e.g. Nick Cave)"
          v-model="resource.author"
        />
      </OField>
    </div>

    <div class="mb-4 col-start-1">
      <OField
        label="Time (in minutes)"
        label-for="time"
        :variant="errors.time ? 'danger' : ''"
        :message="errors.time"
      >
        <OInput
          id="time"
          type="number"
          placeholder="Time"
          v-model.number="resource.time"
          min="1"
        />
      </OField>
    </div>

    <div class="mb-4">
      <OField
        label="Servings"
        label-for="servings"
        :variant="errors.servings ? 'danger' : ''"
        :message="errors.servings"
      >
        <OInput
          id="servings"
          type="number"
          placeholder="Servings"
          v-model.number="resource.servings"
          min="1"
        />
      </OField>
    </div>

    <div class="mb-4 col-start-1 flex justify-between">
      <OField
        label="Image"
        label-for="image"
        :variant="errors.image ? 'danger' : ''"
        :message="errors.image"
      >
        <OUpload v-model="file">
          <OButton tag="a" variant="primary">
            <OIcon icon="upload" class="mr-4"></OIcon>
            <span>Click to upload</span>
          </OButton>
        </OUpload>
      </OField>
      <ResourceImage v-if="resource.image" :src="resource.image" />
    </div>

    <div class="mb-4">
      <OField label="Difficulty" class="">
        <div class="flex">
          <ODropdown
            placeholder="Difficulty"
            v-model="resource.difficulty"
            aria-role="list"
          >
            <OButton
              variant="primary"
              type="button"
              slot="trigger"
              class="w-32"
            >
              <div class="flex justify-between">
                <span>{{ resource.difficulty | difficulty }}</span>
                <OIcon icon="caret-down"></OIcon>
              </div>
            </OButton>
            <ODropdownItem value="easy">
              <span>Easy</span>
            </ODropdownItem>
            <ODropdownItem value="medium">
              <span>Medium</span>
            </ODropdownItem>
            <ODropdownItem value="hard">
              <span>Hard</span>
            </ODropdownItem>
          </ODropdown>
        </div>
      </OField>
    </div>
    <div class="mb-4 col-start-1 md:col-end-3">
      <OField
        label="Procedure"
        label-for="procedure"
        :variant="errors.procedure ? 'danger' : ''"
        :message="errors.procedure"
      >
        <OInput
          inputClass="h-48"
          id="procedure"
          type="textarea"
          placeholder="How to make your resource step by step"
          v-model="resource.procedure"
        />
      </OField>
    </div>
    <div class="flex justify-center col-start-1 md:col-end-3">
      <OButton label="Add resource" @click="addResource" native-type="button" />
    </div>

    <p style="position: relative">
      <OLoading full-page :active.sync="isLoading">
        <OIcon
          class="text-main dark:text-main-dark"
          icon="sync-alt"
          size="large"
          spin
        >
        </OIcon>
      </OLoading>
    </p>
  </form>
</template>
