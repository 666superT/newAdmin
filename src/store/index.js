import { createStore } from 'vuex'
import user from './modules/user'
import vuexp from 'vuex-persistedstate'
export default createStore({
  modules: {
    user
  },
  plugins: [vuexp()]
})

// TODO 配置提交检测工具
