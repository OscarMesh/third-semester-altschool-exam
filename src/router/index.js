import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductView from "../views/ProductView.vue";
import ProductImages from "../components/ProductImages.vue";
import ErrorView from "../views/ErrorView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "Login",
      authIsRequired: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      title: "Register",
      authIsRequired: false,
    },
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    meta: {
      title: "Products",
      authIsRequired: true,
    },
  },
  {
    path: "/products/:id",
    name: "product",
    component: ProductView,
    meta: {
      title: "Product",
      authIsRequired: true,
    },
    children: [
      {
        // nested routes
        path: "images/:id",
        component: ProductImages,
        name: "product-images",
        props: true,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "error-page",
    component: ErrorView,
  },
];
const router = createRouter({ history: createWebHistory(), routes });
var isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
router.beforeEach((to, from, next) => {
  if (
    "authIsRequired" in to.meta &&
    to.meta.authIsRequired &&
    isLoggedIn !== true
  ) {
    next("/login");
  } else if (
    "authIsRequired" in to.meta &&
    !to.meta.authIsRequired &&
    isLoggedIn === true
  ) {
    next("/products");
  } else {
    next();
  }
});

export default router;
