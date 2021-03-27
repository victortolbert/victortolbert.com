import axios from 'axios'

export const fetchComment = async function () {
  const response = await axios.get('/comment')
  return response.data.comment
}
