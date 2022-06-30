import axios from 'axios'
import md5 from 'md5'
import { ElMessage } from 'element-plus'
import { loding } from '../utils/loding'
import store from '../store'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截
http.interceptors.request.use(
  (config) => {
    loding.open()
    const { icode, time } = getTestICode()
    config.headers.icode = icode
    config.headers.codeType = time

    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  (err) => {
    loding.close()
    return Promise.reject(err)
  }
)
// 响应拦截
http.interceptors.response.use(
  (res) => {
    loding.close()
    const { data, message, success } = res.data
    if (success) {
      ElMessage({ message, type: 'success' })
      return data
    } else {
      _showMessage(message)
      return data
    }
    // return res
  },
  (err) => {
    loding.close()
    if (err.response.status === 401) {
      store.dispatch('user/logOut')
    }
    return Promise.reject(err)
  }
)

// 提示信息
function _showMessage(message) {
  const msg = message || '未知错误'
  ElMessage.error(msg)
}

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
