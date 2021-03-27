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
  getRecipes(perPage, page) {
    return apiClient.get('/recipes?_limit=' + perPage + '&_page=' + page)
  },
  getRecipe(id) {
    return apiClient.get('/recipes/' + id)
  },
  postRecipe(recipe) {
    return apiClient.post('/recipes', recipe)
  },
  getRecipeCount(query) {
    return apiClient.get(`/recipes?q=${query}`)
    // return payload
  },
}
