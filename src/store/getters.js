const getters = {
  token: (state) => state.user.token || '',
  userInfo: (state) => state.user.userInfo || '',
  tags: (state) => state.tags.tagsList || ''
}

export { getters }
