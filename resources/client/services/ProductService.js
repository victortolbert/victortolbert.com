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
  getProducts(perPage, page) {
    return apiClient.get(`products?_limit=${perPage}&_page=${page}`)
  },
  getProduct(id) {
    return apiClient.get(`products/${id}`)
  },
  postProduct(product) {
    return apiClient.post('products', product)
  },
}
