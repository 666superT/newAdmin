<template>
  <el-breadcrumb separator="/">
    <template v-for="(v, i) in props.breadcrumbData" :key="i">
      <el-breadcrumb-item
        :to="{ path: v.path }"
        v-if="i !== props.breadcrumbData.length - 1"
        >{{ v.meta.title }}</el-breadcrumb-item
      >
      <el-breadcrumb-item v-else>{{ v.meta.title }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  breadcrumbData: {
    type: Array,
    defaul: () => []
  }
})
</script>

<style lang="scss" scoped></style>
