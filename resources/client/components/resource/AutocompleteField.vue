<script lang="ts">
import {defineComponent} from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const {t} = useI18n()
    return {t}
  },
  data() {
    return {
      data: [],
      selected: '',
      isFetching: false,
      name: '',
    }
  },
  methods: {
    go(option) {
      // option => (selected = option)
      this.selected = option
      window.open(this.selected?.fileUrl, '_blank')
      // console.log(this.selected?.file_url)
    },
    getAsyncData(name) {
      // String update
      if (this.name !== name) {
        this.name = name
        this.data = []
      }
      // String cleared
      if (!name.length) {
        this.data = []
        return
      }
      this.isFetching = true
      // resources?title=json-server&author=typicode
      // resources?id=1&id=2
      // resources?author.name=typicode
      // resources?_page=7
      // resources?_page=7&_limit=20
      // resources?_sort=views&_order=asc
      // posts/1/comments?_sort=votes&_order=asc
      // resources?_sort=title,modified_at&_order=asc,desc
      // posts?_start=20&_end=30
      // posts/1/comments?_start=20&_end=30
      // posts/1/comments?_start=20&_limit=10
      /// posts?views_gte=10&views_lte=20
      // posts?id_ne=1
      // posts?title_like=server
      // posts?q=internet
      // posts?_embed=comments
      // posts/1?_embed=comments
      // comments?_expand=post
      // comments/1?_expand=post
      // `https://api.victortolbert.com&query=${name}&page=${this.page}`,
      this.$axios
        .$get(`resources?q=${name}`)
        // .then(response => response.json())
        .then(data => {
          data.forEach(item => this.data.push(item))
        })
        .catch(error => {
          throw error
        })
        .finally(() => {
          this.isFetching = false
        })
    },
    getMoreAsyncData() {
      this.getAsyncData(this.name)
    },
  },
})
</script>

<template>
  <!-- @select="go($event)" -->
  <OField label="Find a resource">
    <OAutocomplete
      :data="data"
      placeholder="e.g. Ecco Users Manual"
      field="title"
      :loading="isFetching"
      check-infinite-scroll
      :debounce-typing="500"
      @typing="getAsyncData"
      @infinite-scroll="getMoreAsyncData"
      icon="search"
      icon-pack="fal"
      clearable
      rounded
      expanded
    >
      <template slot-scope="props">
        <div class="media">
          <div class="media-left">
            <!-- <img
              width="32"
              :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`"
            /> -->
          </div>
          <div class="media-content">
            <h4 class="font-semibold">{{ props.option.title }}</h4>
            <p>{{ props.option.description }}</p>
            <small>
              Last Modified {{ props.option.modified_at }}, tags
              <b>{{ props.option.tags }}</b>
            </small>
          </div>
        </div>
      </template>
    </OAutocomplete>
  </OField>
</template>
