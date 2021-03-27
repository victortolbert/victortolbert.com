import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API_URL || 'https://api.victortolbert.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

export default resource => ({
  get: () => {
    return instance.get(`${resource}`)
  },
  show: (id) => {
    return instance.get(`${resource}/${id}`)
  },
  create: (payload) => {
    return instance.post(`${resource}`, payload)
  },
  update: (id, payload) => {
    return instance.put(`${resource}/${id}`, payload)
  },
  delete: (id) => {
    return instance.delete(`${resource}/${id}`)
  },
})
