import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.victortolbert.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getRegions(perPage, page) {
    return apiClient.get(`regions?_limit=${perPage}&_page=${page}`)
  },
  getRegion(id) {
    return apiClient.get(`regions/${id}`)
  },
  postRegion(region) {
    return apiClient.post('regions', region)
  },
}
