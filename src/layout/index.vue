<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <sidebar id="guide-sidebar" class="sidebar-container" />
    <!-- 右侧 -->
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar />
        <tags-view></tags-view>
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import navbar from './components/Navbar.vue'
import TagsView from '../components/TagsView.vue'
</script>

<style lang="scss" scoped>
.sidebar-container {
  background: #304156;
  height: 100vh;
  width: 210px;
  overflow: auto;
  float: left;
}
.main-container {
  width: calc(100% - 210px);
  height: 100%;
  margin-left: 210px;
  position: relative;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - 210px);
  }
}
</style>
