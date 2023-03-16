<template>
  <h1>
    Welcome
    <span> {{ user }}</span>
  </h1>
  <h2>This is the products view</h2>
</template>

<script>
import { mapState } from "vuex";
import { RouterLink, RouterView } from "vue-router";
// import auth from "../store/auth";

export default {
  name: "products",
  // beforeRouteEnter(to, from, next) {
  //   if (to.query.redirectFrom) {
  //     next((vm) => vm.$router.push(to.query.redirectFrom));
  //   } else {
  //     next();
  //   }
  // },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user.username,
    }),
  },
  data() {
    return {
      isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")),
    };
  },
  methods: {
    onAddToCart() {
      console.log("Added to cart");
    },
  },
  mounted() {},
};
</script>
