import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com',
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

export default api