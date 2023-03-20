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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit("setUser", user);
      toast.success("You have successfully registered", {
        timeout: 2000,
      });
      router.push("/login");
    },
    async login({ state, commit }, { email, password }) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const user = state.user;
      if (user && user.email === email && user.password === password) {
        commit("setIsAuthenticated", true);
        toast.success("Login Successful", {
          timeout: 2000,
        });
        router.push("/products");
      } else {
        toast.error("Invalid email or password", {
          timeout: 2000,
        });
      }
    },
    logout({ commit }) {
      commit("setIsAuthenticated", false);
      router.push("/login");
      toast.success("Logout Successful", {
        timeout: 2000,
      });
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
