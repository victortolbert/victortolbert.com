<script>
import { computed, onBeforeUnmount, onMounted, reactive } from 'vue'
import { useUpload } from '@websanova/vue-upload'

export default {
  setup() {
    const upload = useUpload()
    const state = reactive({
      files: [],
      errors: [],
      _files: computed(() => {
        return upload.files('demo-multi')
      }),
      _meta: computed(() => {
        return upload.meta('demo-multi')
      })
    })
    function select() {
      upload.select('demo-multi')
    }
    function reset() {
      upload.reset('demo-multi')
    }
    onMounted(() => {
      // NOTE: Important to do dropzoneId on mounted
      //     otherwise it won't find the element.
      upload.on('demo-multi', {
        url: 'demos/image',
        accept: 'image/*',
        multiple: true,
        dropzoneId: 'dropzone',
        startOnSelect: true,
        maxFilesInProgress: 2,
        maxSizePerFile: 1024 * 1024 * 3,
        extensions: ['gif', 'png', 'jpg', 'jpeg'],
        onSelect: (files, res) => {
          console.log('onSelect')
          console.log(files)
          console.log(res)
          state.errors = []
          if (res) {
            state.errors.push(res)
          }
          // Add some additional data to the request.
          upload.option('demo-multi', 'body', {
            some_id: 1
          })
          console.log(upload.meta('demo-multi'))
          console.log(upload.errors('demo-multi'))
        },
        onProgress(file, res) {
          console.log('onProgress')
          console.log(file)
          console.log(res)
        },
        onSuccess: (file, res) => {
          console.log('onSuccess')
          console.log(file)
          console.log(res)
          // On success we can update whatever we need
          // to locally, for instance the user avatar.
          state.files.push(res.data.data)
        },
        onError: (file, res) => {
          console.log('onError')
          console.log(file)
          console.log(res)
        },
        onEnd(files, res) {
          console.log('onEnd')
        }
      })
    })
    onBeforeUnmount(() => {
      upload.off('demo-multi')
    })
    return {
      state,
      select,
      reset,
    }
  }
}
</script>
<template>
  <PageWrapper>
    <SectionWrapper>
      <ul class="spacer mb-2">
        <li>
          <OButton @click="select">Select Files</OButton>
        </li>
        <li>
          <OButton v-show="state._meta.state === 'complete'" @click="reset">Reset</OButton>
        </li>
      </ul>
      <ul class="spacer">
        <li v-for="file in state.files">
          <div class="thumbnail thumbnail-sm">
            <img :src="file.image" />
          </div>
        </li>
      </ul>
      <hr />
      <div class="prose media py-0">
        <div class="media-middle text-bold">Files</div>
        <div class="media-tight media-middle media-right">
          <span v-show="state._meta.state === 'uploading'" class="spinner" />
          <span class="text-muted text-sm mx-1">({{ state._meta.percentComplete }}%)</span>
          {{ state._meta.state }}
        </div>
      </div>
      <div v-for="error in state.errors" class="text-danger">{{ error.msg }}</div>
      <div v-for="file in state._files.all" class="media py-0">
        <div class="media-middle">
          {{ file.name }}
          <div v-if="file.error" class="w-100 text-danger text-sm">{{ file.error.msg }}</div>
          <div class="w-100">
            <button
              v-show="file.state === 'queue' || file.state === 'progress' || file.state === 'upload'"
              @click="file.clear()"
              class="btn-sm"
            >cancel</button>
            <button
              v-show="file.state === 'success' || file.state === 'error'"
              @click="file.clear()"
              class="btn-sm"
            >clear</button>
          </div>
        </div>
        <div class="media-tight media-middle media-right">
          <span v-show="file.sending" class="spinner" />
          <span class="text-muted text-sm mx-1">({{ file.percentComplete }}%)</span>
          {{ file.state }}
        </div>
      </div>
      <hr />
      <div
        id="dropzone"
        class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
      >
        <div class="space-y-1 text-center">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="flex text-sm text-gray-600">
            <label
              for="file-upload"
              class="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
            >
              <button @click="select">Upload a file</button>
              <!-- <input id="file-upload" name="file-upload" type="file" class="sr-only" /> -->
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
      <!-- <div >(drop files here to upload)</div> -->
    </SectionWrapper>
  </PageWrapper>
</template>


<style scoped>
#dropzone {
  height: 200px;
  line-height: 200px;
  border: dashed 2px;
  background-color: #fafafa;
  text-align: center;
}
</style>
