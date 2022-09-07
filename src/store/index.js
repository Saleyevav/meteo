import { createStore } from "vuex";

export default createStore({
  state: {
    isLogin: false,
    isAdmin: false,
    userName: "",
  },

  getters: {},

  mutations: {
    login(state, userName) {
      state.isLogin = true;
      state.userName = userName;
    },
    logout(state) {
      state.isLogin = false;
      state.userName = "";
    },
    setIsAdminTrue(state) {
      state.isAdmin = true;
    },
    setIsAdminFalse(state) {
      state.isAdmin = false;
    },
  },

  actions: {},

  modules: {},
});
