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
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faBookmark,
  faCode,
  faStar,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faCode, faBookmark, faStar);
const option = {
  // You can set your default options here
};
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(Vue3Lottie);
app.use(router);
app.use(store);
app.use(Toast, {
  // You can set your default options here
  position: POSITION.TOP_LEFT,
});

app.mount("#app");
