<template>
  <div class="tags-box">
    <ul class="tags-view-list">
      <li
        class="tag"
        :class="{ active: $route.path == v.path }"
        v-for="(v, i) in tagsList"
        :key="i"
        @click="handelSelectTag(v.path)"
      >
        {{ v.title }}
        <span @click.stop="handelCloseTag(i)">
          <svg-icon icon="close" v-if="$route.path !== v.path"></svg-icon>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
const router = useRouter()
const route = useRoute()
const store = useStore()

/**
 * 监听但前路由变化
 */
watch(
  () => route.matched,
  (newVal, oldVal) => {
    newVal.forEach((v, i) => {
      if (i === 1) {
        const obj = {
          title: v.meta.title,
          path: v.path
        }
        store.commit('tags/setTagsList', obj)
      }
    })
  }
)

const tagsList = computed(() => {
  return store.getters.tags
})

/**
 * 点击tag跳转
 */
function handelSelectTag(path) {
  router.push(path)
}

/**
 * 点击删除tag
 */
function handelCloseTag(i) {
  store.commit('tags/removeTag', i)
}
</script>

<style lang="scss" scoped>
.tags-box {
  background: #fff;
  height: 32px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  .tags-view-list {
    display: flex;
    height: 100%;
    .tag {
      padding: 0 8px;
      border: 1px solid #d8dce5;
      font-size: 12px;
      height: 26px;
      line-height: 26px;
      margin-top: 4px;
      margin-left: 5px;
      &:nth-of-type(1) {
        margin-left: 15px;
      }
    }
    .active {
      font-size: 12px;
      height: 26px;
      line-height: 26px;
      background: rgb(48, 65, 86);
      border-color: rgb(48, 65, 86);
      color: #fff;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
  }
}
</style>
