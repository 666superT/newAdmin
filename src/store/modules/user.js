import {
  getUserInfo
} from '../../api/login'

import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken(state, res) {
      state.token = res.token
    }
  },
  actions: {
    async handelLogin({
      commit
    }, params) {
      try {
        const res = await getUserInfo(params)
        if (res) {
          commit('setToken', res)
          // console.log(res)
          router.push('/')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
