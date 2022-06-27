import {
  getUserInfo
} from '../../api/login'
export default {
  namespaced: true,
  state: () => ({
    token: ''
  }),
  mutations: {
    setToken(state, res) {
      state.token = res.data.data.token
    }
  },
  actions: {
    async handelLogin({
      commit
    }, params) {
      const res = await getUserInfo(params)
      console.log(res)
      commit('setToken', res)
    }
  }
}
