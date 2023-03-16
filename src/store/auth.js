export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: false,
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  mutations: {
    register(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    login(state, status) {
      state.isLoggedIn = status;
      localStorage.setItem("isLoggedIn", JSON.parse(status));
    },
    intializeState(state) {
      if (localStorage.getItem("isLoggedIn") && localStorage.getItem("user")) {
        state.isLoggedIn = localStorage.getItem("isLoggedIn");
        state.user = JSON.parse(localStorage.getItem("user"));
      }
    },
    clearUser(state) {
      state.user = {
        username: "",
        email: "",
        password: "",
      };
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", false);
      state.user = {
        username: "",
        email: "",
        password: "",
      };
    },
  },
  actions: {
    login({ commit }, status) {
      commit("login", status);
    },
  },
  getters: {},
};
