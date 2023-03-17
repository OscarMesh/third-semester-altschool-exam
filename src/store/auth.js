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
      localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
    },
    intializeState(state) {
      if (
        JSON.parse(localStorage.getItem("isLoggedIn")) &&
        localStorage.getItem("user")
      ) {
        state.isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
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
