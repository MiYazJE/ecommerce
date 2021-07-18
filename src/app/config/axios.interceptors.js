import { BASE_API_URL } from 'common/constants/paths'
import axios from 'axios'

export const setupInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      const newConfig = { ...config }

      if (!newConfig?.baseURL) {
        newConfig.baseURL = BASE_API_URL
      }

      if (!newConfig.responseType) {
        newConfig.responseType = 'json'
      }

      return newConfig
    },
    (error) => Promise.reject(error)
  )
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error)
    }
  )
}
