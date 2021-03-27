import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.API_URL || 'https://api.victortolbert.com',
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 60000,
})

export default {
  getResources(perPage, page) {
    return apiClient.get('/resources?_limit=' + perPage + '&_page=' + page)
  },
  getResource(id) {
    return apiClient.get('/resources/' + id)
  },
  postResource(resource) {
    return apiClient.post('/resources', resource)
  },
  getResourceCount(query) {
    return apiClient.get(`/resources?q=${query}`)
    // return payload
  },
}
