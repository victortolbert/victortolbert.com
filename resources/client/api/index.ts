import axios from 'axios'
import { useAxios } from '@vueuse/integrations'

const instance = axios.create({
  baseURL: 'https://api.victortolbert.com'
})

export const { data, finished } = useAxios('posts', instance)
// export const { data, finished } = useAxios('/posts', { method: 'POST' }, instance)
