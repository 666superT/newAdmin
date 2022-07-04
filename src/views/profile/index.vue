<template>
  <div class="">
    <el-row>
      <el-col :span="6">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>Card name</span>
              <el-button class="button" text>Operation button</el-button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="18"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
