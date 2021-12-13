import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'shifei'
  },
  getters: {
    newName(state) {
      return state.username + 'hello'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
