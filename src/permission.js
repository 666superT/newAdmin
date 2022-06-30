import store from './store'
import router from './router'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    const res = store.dispatch('user/getUser')
    // console.log(res)
    if (res) {
      if (whiteList.includes(to.path)) {
        next(from.path)
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
