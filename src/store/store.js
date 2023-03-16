import { createStore } from "vuex";
import auth from "./auth";

const store = createStore({
  modules: {
    // modules
    auth,
  },
});

export default store;
