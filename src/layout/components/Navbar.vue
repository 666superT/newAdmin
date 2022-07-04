<template>
  <div class="navbar">
    <div class="left">
      <div class="svg">
        <svg-icon icon="hamburger-opened"></svg-icon>
      </div>
      <div class="title">
        <Breadcrumb :breadcrumbData="breadcrumbData"></Breadcrumb>
      </div>
    </div>
    <div class="right">
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar shape="square" :size="40" :src="avatar" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">首页</el-dropdown-item>
            <el-dropdown-item>课程主页</el-dropdown-item>
            <el-dropdown-item command="logOut" divided
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import Breadcrumb from '../../components/Breadcrumb.vue'

const store = useStore()
const router = useRouter()
const route = useRoute()

function handleCommand(val) {
  if (val === 'logOut') logOut()
  if (val === 'home') goHome()
}
/*
退出登录
*/
const logOut = () => store.dispatch('user/logOut')
/*
回到首页
*/
const goHome = () => router.push('/')
/**
 * 获取用户信息
 */
const avatar = computed(() => {
  return store.getters.userInfo.avatar
})

/**
 * 当前所在页面路由
 */
const breadcrumbData = computed(() => {
  return route.matched.filter((v) => v.meta.title && v.meta.icon)
})
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-avatar {
  background: none;
}
.left {
  display: flex;
  height: 100%;
  line-height: 50px;
  .svg {
    padding: 0 16px;
  }
  .title {
    margin-left: 5px;
    display: flex;
    align-items: center;
  }
}
.svg:hover {
  background: #ccc;
}
</style>
