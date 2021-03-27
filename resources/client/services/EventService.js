import axios from 'axios'
// import {Toast} from 'buefy/dist/components/toast'

function hideDefaultLoading() {
  document.querySelector('#overlays').classList.add('hidden')
}

const instance = axios.create({
  baseURL: process.env.API_URL || 'https://api.victortolbert.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(function (request) {
  if (request.loading && typeof request.loading === 'function') {
    request.loading()
  } else {
    document.querySelector('#overlays').classList.remove('hidden')
  }

  return request
})

instance.interceptors.response.use(function (response) {
  hideDefaultLoading()

  return response
})

export default {
  getEvents(perPage, page) {
    return instance.get('events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id) {
    return instance.get('events/' + id)
  },
  postEvent(event) {
    return instance.post('events', event)
  },
  index: resource => {
    return instance.get(`${resource}`)
  },
  get: (resource, perPage, page, loading, error) => {
    return instance.get(`${resource}?_limit=` + perPage + '&_page=' + page, {
      loading,
      error,
    })
  },
  find: (resource, id, loading, error) => {
    return instance.get(`${resource}/${id}`, {
      loading,
      error,
    })
  },
  create: (resource, item, loading, error) => {
    return instance.post(`${resource}`, item, {
      loading,
      error,
    })
  },
  update: (resource, id, item, loading, error) => {
    return instance.put(`${resource}/${id}`, item, {
      loading,
      error,
    })
  },
  delete: (resource, id, loading, error) => {
    return instance.delete(`${resource}/${id}`, {
      loading,
      error,
    })
  },
}
