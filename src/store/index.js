import { createStore } from "vuex";

export default createStore({
  state: {
    isLogin: false,
    isAdmin: false,
  },
  getters: {},
  mutations: {
    login() {
      this.state.isLogin = true;
    },
    logout() {
      this.state.isLogin = false;
    },
    toggleIsAdmin() {
      this.state.isAdmin = !state.isAdmin;
    },
  },
  actions: {},
  modules: {},
});
