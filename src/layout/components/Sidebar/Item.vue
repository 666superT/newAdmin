<template>
  <template v-if="props.item && !props.item.children">
    <el-menu-item :index="item.path">
      <el-icon>
        <svg-icon icon='personnel'></svg-icon>
      </el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
  </template>
  <template
    v-if="props.item && props.item.children && props.item.children.length > 0"
  >
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon>6</el-icon>
          <span>{{item.title}}</span>
        </template>
        <Item v-for="v in item.children" :key="v" :item="v"></Item>
      </el-sub-menu>
    </template>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped></style>
