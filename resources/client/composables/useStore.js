import axios from 'axios'
import {reactive, readonly} from 'vue'

const initialPostsState = () => ({
  all: {},
  ids: [],
  loaded: false,
})

const initialState = () => ({
  posts: initialPostsState(),
})

class Store {
  // state

  constructor(initialState) {
    this.state = reactive(initialState)
  }

  getState() {
    return readonly(this.state)
  }

  async fetchPosts() {
    const response = await axios.get('https://api.victortolbert.com/posts')
    const ids = []
    const all = {}

    for (const post of response.data) {
      ids.push(post.id.toString())
      all[post.id] = post
    }

    this.state.posts = {
      ids,
      all,
      loaded: true,
    }
  }
}

const store = new Store(initialState())

export const useStore = () => store
