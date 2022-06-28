<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <sidebar id="guide-sidebar" class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar />
      </div>
      <!-- 内容区 -->
        <app-main />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import navbar from './components/Sidebar/Navbar.vue'
</script>

<style lang="scss" scoped>
.sidebar-container {
  background: #304156;
  height: 100vh;
  width: 210px;
  overflow: auto;
  float: left;
}
.container{
  float: left;
}
</style>
