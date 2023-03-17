import { createStore } from "vuex";
import auth from "./auth";
import products from "./products";

const store = createStore({
  modules: {
    // modules
    auth,
    products,
  },
});

export default store;
