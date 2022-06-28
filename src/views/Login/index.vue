<template>
  <div class="login">
    <div class="login_form">
      <div class="title">
        <h1>用户登录</h1>
        <i style="font-size: 25px">
          <svg-icon icon="language"></svg-icon>
        </i>
      </div>
      <el-form ref="LoginForm" :model="loginForm" :rules="loginRules">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="username"
            type="text"
          >
            <template #prefix>
              <svg-icon icon="user"></svg-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            :type="flag ? 'text' : 'password'"
          >
            <template #prefix>
              <svg-icon icon="password"></svg-icon>
            </template>
            <template #suffix>
              <span @click="flag = !flag">
                <svg-icon v-if="!flag" icon="eye"></svg-icon>
                <svg-icon v-else icon="eye-open"></svg-icon>
              </span>
            </template>
          </el-input>
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
import md5 from 'md5'
import { reactive, ref } from 'vue'
import { passwordValidator } from './validator.js'
import { useStore } from 'vuex'
import util from '../../utils/util'
// 登录表单
const loginForm = reactive({
  username: 'super-admin',
  password: '123456'
})

const store = useStore()
const LoginForm = ref()

// true密码可见
const flag = ref(false)
// 表单校验
const loginRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, validator: passwordValidator, trigger: 'blur' }]
})
// 登录按钮
const handelLogin = async () => {
  if (!LoginForm.value) return
  await LoginForm.value.validate((valid) => {
    if (valid) {
      const newLoginForm = util.deepCopy(loginForm)
      newLoginForm.password = md5(newLoginForm.password)
      store.dispatch('user/handelLogin', newLoginForm)
    }
  })
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
        text-align: center;
        line-height: 30px;
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
          background: transparent !important;
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
