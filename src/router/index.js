import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const publicRoutes = [{
  path: '/login',
  name: 'Login',
  component: () => import('../views/Login')
}, {
  path: '/',
  component: () => import('../layout')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
