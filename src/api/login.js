import http from '../utils/request'

function getUserInfo(params) {
  return http({
    url: '/sys/login',
    method: 'post',
    data: params
  })
}

export {
  getUserInfo
}
