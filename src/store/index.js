import { createStore } from 'vuex'
import user from './modules/user'
import vuexp from 'vuex-persistedstate'
import { getters } from './getters.js'
export default createStore({
  getters,
  modules: {
    user
  },
  plugins: [vuexp()]
})
