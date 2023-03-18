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
    login(state) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
      location.href = "/products";
    },
    intializeState(state) {
      if (
        JSON.parse(localStorage.getItem("isLoggedIn")) &&
        localStorage.getItem("user")
      ) {
        state.isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
        state.user = localStorage.getItem("user");
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", false);
      location.href = "/";
    },
    clearUser(state) {
      state.isLoggedIn = false;
      localStorage.setItem("isLoggedIn", false);
      state.user = {
        username: "",
        email: "",
        password: "",
      };
      localStorage.setItem("user", state.user);
    },
  },
  actions: {
    login({ commit }, status) {
      commit("login", status);
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
};
