import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const publicRoutes = [{
  path: '/login',
  name: 'Login',
  component: () => import('../views/Login')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
