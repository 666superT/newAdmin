import http from '../utils/request'
// 登录
function login(params) {
  return http({
    url: '/sys/login',
    method: 'post',
    data: params
  })
}
// 获取用户信息
function getUserInfo() {
  return http({ url: '/sys/profile', method: 'get' })
}

export { getUserInfo, login }
