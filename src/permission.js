import store from './store'
import router from './router'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  console.log(token)
  if (token) {
    if (whiteList.includes(to.path)) {
      next(from.path)
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
