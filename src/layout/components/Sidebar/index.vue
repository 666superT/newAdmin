<template>
  <div class="sidebar">
    <h1>vue-admin-template</h1>
    <menu-tree :data="data"></menu-tree>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import menuTree from './MenuTree'

const data = reactive([
  { title: '个人中心', path: '/profile', icon: 'Avatar' },
  { title: '数据可视化', path: '/data', icon: 'Avatar' },
  {
    title: '用户',
    icon: 'Avatar',
    children: [
      { title: '员工管理', path: '/66', icon: 'Avatar' },
      { title: '角色管理', path: '/66', icon: 'Avatar' },
      { title: '权限管理', path: '/66', icon: 'Avatar' }
    ]
  },
  {
    title: '文章',
    icon: 'Avatar',
    children: [
      { title: '文章排名', icon: 'Avatar', path: '/88' },
      { title: '创建文章', icon: 'Avatar', path: '/88' }
    ]
  }
])
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  h1 {
    background: #070a0d;
    font-size: 20px;
    color: #fff;
    text-align: center;
    padding: 20px 0;
  }
}
</style>
