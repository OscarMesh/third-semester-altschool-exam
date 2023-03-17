import { $_getPosts } from "../utils/Products";
export default {
  namespaced: true,
  state() {
    return {
      products: [],
      isLoading: true,
      errors: null,
    };
  },
  mutations: {
    SET_ERRORS(state, payload) {
      state.errors = payload;
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async getProducts({ commit }) {
      commit("SET_LOADING", true);
      try {
        const response = await $_getPosts();
        commit("SET_PRODUCTS", response);
      } catch (error) {
        commit("SET_ERRORS", error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {},
};
