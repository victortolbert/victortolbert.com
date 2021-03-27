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
  getClients(perPage, page) {
    return apiClient.get('/clients?_limit=' + perPage + '&_page=' + page)
  },
  getClient(id) {
    return apiClient.get('/clients/' + id)
  },
  postClient(message) {
    return apiClient.post('/clients', message)
  },
  getClientCount(query) {
    return apiClient.get(`/clients?q=${query}`)
    // return payload
  },
}
