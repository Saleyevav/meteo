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
    setIsAdminTrue() {
      this.state.isAdmin = true;
    },
    setIsAdminFalse(){
      this.state.isAdmin = false;
    }
  },
  actions: {},
  modules: {},
});
