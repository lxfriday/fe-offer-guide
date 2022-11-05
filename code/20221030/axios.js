const axios = require('axios')

const instance = axios.create()

instance.interceptors.request.use(function (req) {
  console.log('interceptors request', req)
  return req
})
instance.interceptors.response.use(function (res) {
  console.log('interceptors response', res)
  return res
})
async function get(url, params) {
  return await instance.get(url, {
    params,
  })
}
async function post(url, data) {
  return await instance.post(url, {
    data,
  })
}
module.exports = {
  get,
  post,
}
get('http://www.baidu.com')
