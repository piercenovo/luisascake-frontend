import axios from 'axios'

const BASE_URL = 'http://localhost:2207/api'
export const API_URL = 'http://localhost:2207'

export const publicRequest = axios.create({
  baseURL: BASE_URL
})
