import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.victortolbert.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  all() {
    return apiClient.get('people')
  },
  getPeople(perPage, page) {
    return apiClient.get(`people?_limit=${perPage}&_page=${page}`)
  },
  getPerson(id) {
    return apiClient.get(`people/${id}`)
  },
  postPerson(person) {
    return apiClient.post('people', person)
  },
}
