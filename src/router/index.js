import { createRouter, createWebHashHistory } from 'vue-router'

import layout from '../layout'

// 公有路由
const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/',
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('../views/chart'),
        meta: {
          title: '数据可视化',
          icon: 'chart-bar'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401')
      }
    ]
  }
]

// 私有路由
const privateRouter = [
  {
    path: '/user',
    name: 'user',
    component: layout,
    redirect: '/user/usermanage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'manage',
        component: () => import('../views/user-manage'),
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'role',
        component: () => import('../views/role-list'),
        meta: {
          title: '角色管理',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'permission',
        component: () => import('../views/permission-list'),
        meta: {
          title: '权限管理',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('../views/user-info')
      },
      {
        path: '/user/import',
        name: 'userImport',
        component: () => import('../views/import')
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: layout,
    meta: {
      title: '文章',
      icon: 'article'
    },
    redirect: '/article/ranking',
    children: [
      {
        path: '/article/ranking',
        name: 'ranking',
        component: () => import('../views/article-ranking'),
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'create',
        component: () => import('../views/article-create'),
        meta: {
          title: '创建文章',
          icon: 'article-create'
        }
      },
      {
        path: '/article/detail/:id',
        name: 'article/detail',
        component: () => import('../views/article-detail')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRouter]
})

export default router
