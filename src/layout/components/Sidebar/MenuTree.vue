<template>
  <el-menu
    active-text-color="#fff"
    background-color="#304156"
    default-active="1"
    text-color="#bfcbd9"
    router
  >
    <Item v-for="(v, i) in props.data" :key="i" :item="v" />
  </el-menu>
</template>

<script setup>
import { defineProps } from 'vue'
import Item from './Item'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped></style>
