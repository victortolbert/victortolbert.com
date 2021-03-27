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
  getAffiliates(perPage = 25, page = 1) {
    return apiClient.get(`affiliates?_limit=${perPage}&_page=${page}`)
  },
  getAffiliate(id) {
    return apiClient.get(`affiliates/${id}`)
  },
  postAffiliate(affiliate) {
    return apiClient.post('affiliates', affiliate)
  },
}
