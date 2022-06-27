<template>
  <div class="login">
    <div class="login_form">
      <div class="title">
        <h1>用户登录</h1>
        <i>icon</i>
      </div>
      <el-form
        ref="LoginForm"
        :model="loginForm"
        status-icon
        :rules="loginRules"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="username">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="password" />
        </el-form-item>
        <el-button
          type="primary"
          style="width: 100%"
          @click="handelLogin(LoginForm)"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { User } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { passwordValidator } from './validator.js'
import { getUserInfo } from '../../api/login'
// 登录表单
const loginForm = reactive({
  username: '',
  password: ''
})
// 表单校验
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, validator: passwordValidator, trigger: 'blur' }]
})
// 登录按钮
const handelLogin = async (formName) => {
  // console.log(formName)
  // if (!formName) return
  // await formName.validate((valid) => {
  //   console.log(valid)
  // })
  const res = await getUserInfo(loginForm)
  console.log(res)
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background: #2d3a4b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .login_form {
    width: 520px;
    .title {
      margin-bottom: 40px;
      position: relative;
      h1 {
        color: #fff;
        text-align: center;
      }
      i {
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 5px;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    .el-form-item {
      border: 1px solid hsla(0, 0%, 100%, 0.1);
      border-radius: 5px;
      height: 47px;
      background: #283443;
      ::v-deep .el-input {
        input {
          color: #fff !important;
        }
      }
      ::v-deep .el-input__wrapper {
        background: #283443 !important;
        box-shadow: none;
      }
    }
  }
}
</style>
