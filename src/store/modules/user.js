import { login, getUserInfo } from '../../api/login'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: '',
    userInfo: ''
  }),
  mutations: {
    setToken(state, res) {
      state.token = res.token
    },
    setUserInfo(state, res) {
      state.userInfo = res
    }
  },
  actions: {
    // 登录
    async handelLogin({ commit }, params) {
      try {
        const res = await login(params)
        if (res) {
          commit('setToken', res)
          router.push('/')
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取用户信息
    async getUser({ commit }) {
      try {
        const res = await getUserInfo()
        if (res) {
          commit('setUserInfo', res)
          return res
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 退出登录
    logOut({ commit }) {
      try {
        commit('setToken', '')
        commit('setUserInfo', '')
        router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
