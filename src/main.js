import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";
import store from "./store/store";
import "./assets/main.css";
import Toast, { POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
const option = {
  // You can set your default options here
};
const app = createApp(App);
app.use(Vue3Lottie);
app.use(router);
app.use(store);
app.use(Toast, {
  // You can set your default options here
  position: POSITION.TOP_LEFT,
});

app.mount("#app");
