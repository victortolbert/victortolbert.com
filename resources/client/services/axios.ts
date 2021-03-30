import axios from 'axios'

export function getMessage() {
  return axios.get('https://api.victortolbert.com/messages/1').then((response) => {
    return response.data
  })
}
