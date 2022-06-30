<template>
  <template v-if="props.item && !props.item.children">
    <el-menu-item :index="props.item.path">
      <el-icon>
        <svg-icon :icon='props.item.meta.icon'></svg-icon>
      </el-icon>
      <span>{{ props.item.meta.title }}</span>
    </el-menu-item>
  </template>
  <template
    v-if="props.item && props.item.children && props.item.children.length > 0"
  >
      <el-sub-menu :index="props.item.path">
        <template #title>
          <el-icon>
            <svg-icon :icon='props.item.meta.icon'></svg-icon>
          </el-icon>
          <span>{{props.item.meta.title}}</span>
        </template>
        <Item v-for="v in props.item.children" :key="v" :item="v"></Item>
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

console.log('888=>', props.item)
</script>

<style lang="scss" scoped></style>
