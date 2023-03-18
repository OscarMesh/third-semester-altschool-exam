// export default {
//   namespaced: true,
//   state() {
//     return {
//       isLoggedIn: false,
//       user: {
//         username: "",
//         email: "",
//         password: "",
//       },
//     };
//   },
//   mutations: {
//     register(state, user) {
//       state.user = user;
//       localStorage.setItem("user", JSON.stringify(state.user));
//     },
//     login(state) {
//       state.isLoggedIn = true;
//       localStorage.setItem("isLoggedIn", true);
//       location.href = "/products";
//       localStorage.getItem("user", JSON.stringify(state.user));
//     },
//     intializeState(state) {
//       if (
//         JSON.parse(localStorage.getItem("isLoggedIn")) &&
//         localStorage.getItem("user")
//       ) {
//         state.isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
//         state.user = localStorage.getItem("user");
//       }
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//       localStorage.setItem("isLoggedIn", false);
//       localStorage.setItem("user", JSON.stringify(state.user));
//       console.log(state.user);
//       // location.href = "/login";
//     },
//     clearUser(state) {
//       state.isLoggedIn = false;
//       localStorage.setItem("isLoggedIn", false);
//       state.user = {
//         username: "",
//         email: "",
//         password: "",
//       };
//       localStorage.setItem("user", state.user);
//     },
//   },
//   actions: {
//     login({ commit }, status) {
//       commit("login", status);
//     },
//   },
//   getters: {
//     isLoggedIn(state) {
//       return state.isLoggedIn;
//     },
//   },
// };
import { useToast } from "vue-toastification";
import router from "../router";
const toast = useToast();
const USER_KEY = "user";
export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    },
    clearUser(state) {
      state.user = null;
      localStorage.removeItem(USER_KEY);
    },
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {
    async signup({ commit }, user) {
      // simulate async signup request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit("setUser", user);
      // commit("setIsAuthenticated", true);
      toast.success("You have successfully registered");
      router.push("/login");
    },
    async login({ state, commit }, { email, password }) {
      // simulate async login request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const user = state.user;
      if (user && user.email === email && user.password === password) {
        commit("setIsAuthenticated", true);
        toast.success("Login Successful");
        router.push("/products");
      } else {
        // alert("Invalid email or password");
        toast.error("Invalid email or password");
      }
    },
    logout({ commit }) {
      commit("setIsAuthenticated", false);
      router.push("/login");
      toast.success("Logout Successful");
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },
};
