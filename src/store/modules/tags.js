export default {
  namespaced: true,
  state: () => ({
    tagsList: []
  }),
  mutations: {
    // 存储tag
    setTagsList(state, obj) {
      let flag = false
      state.tagsList.forEach((item) => {
        if (item.path === obj.path) {
          flag = true
        }
      })
      if (!flag) {
        state.tagsList.push(obj)
      }
    },
    // 删除tag
    removeTag(state, i) {
      state.tagsList.splice(i, 1)
    }
  }
}
