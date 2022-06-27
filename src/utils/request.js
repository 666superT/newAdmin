import axios from 'axios'
import md5 from 'md5'
import {
  loding
} from '../utils/loding'
const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 50000
})
// 请求拦截
http.interceptors.request.use(
  (config) => {
    loding.open()
    const {
      icode,
      time
    } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    return config
  }, (err) => {
    loding.close()
    return Promise.reject(err)
  }
)
// 响应拦截
http.interceptors.response.use(
  (res) => {
    loding.close()
    return res
  }, (err) => {
    loding.close()
    return Promise.reject(err)
  }
)

// 实现code
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991'
  return {
    icode: md5(code),
    time: now
  }
}
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return http(options)
}

export default request
