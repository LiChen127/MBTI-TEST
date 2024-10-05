import { defineStore } from 'pinia'

export const UserStore = defineStore('user', {
  state: () => ({
    // 用户信息
    userName: '',
    token: '',
    password: ''
  }),
  getters: {
    isLogged: (state) => !!state.token
  },
  actions: {
    setUser(user) {
      this.userName = user.userName
      this.token = user.token
      this.password = user.password
    },
    logout() {
      this.userName = ''
      this.token = ''
      this.password = ''
    }
  }
})