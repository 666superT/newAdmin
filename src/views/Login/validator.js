function passwordValidator(rule, value, callback) {
  if (value === '') {
    callback(new Error('密码不能为空！'))
  } else {
    callback()
  }
}

export {
  passwordValidator
}
