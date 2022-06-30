<template>
  <div class="sidebar">
    <h1>vue-admin-template</h1>
    <menu-tree :data="data"></menu-tree>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import menuTree from './MenuTree'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '../../../utils/filterRouter'
import { filterMenuData } from '../../../utils/menu'

const router = useRouter()
const data = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})
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
