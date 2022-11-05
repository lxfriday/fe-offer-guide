import axios from 'axios'

const instance = axios.create()

instance.defaults.baseURL = './'

instance.interceptors.request.use(function (req) {
  console.log('interceptors request', req)
  return req
})
instance.interceptors.response.use(function (res) {
  console.log('interceptors response', res)
  return res
})
export async function get(url, params) {
  return await instance.get(url, {
    params,
  })
}
export async function post(url, data) {
  return await instance.post(url, {
    data,
  })
}
