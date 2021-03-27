<script lang="ts">
import {defineComponent, onMounted, reactive, toRefs } from 'vue'
import {useRoute} from 'vue-router'

export default defineComponent({
  setup() {
    const { params } = useRoute()

    const state = reactive({
      resource: null,
    });

    onMounted(async () => {
      const response = await fetch(`https://api.victortolbert.com/resources/${params.id}`)
      state.resource = await response.json()
    })

    return {
      ...toRefs(state),
    };
  },

  // async asyncData({params, error}) {
  //   try {
  //     const {data} = await axios.get(
  //       `https://api.victortolbert.com/resources/${params.id}`,
  //     )
  //     return {title: data.title}
  //   } catch (error) {
  //     error({statusCode: 404, message: 'Post not found'})
  //   }
  // },
})
</script>

<template>
  <div>
    {{ resource }}
  </div>
</template>
