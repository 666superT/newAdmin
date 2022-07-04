<template>
  <span class="iconfont" :class="[props.name]" :style="{'font-size':props.size+'px',color:props.color}"></span>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 16
  },
  color: {
    type: String,
    default: '#000'
  }
})
</script>

<style lang="scss" scoped></style>
