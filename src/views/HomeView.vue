<template>
  <!-- <NavComponent /> -->
  <main class="h-[100vh]">
    <div
      class="flex flex-col md:flex-row justify-between items-center mt-10 p-5 md:p-2 lg:p-0"
    >
      <div class="flex flex-col gap-7 max-w-[500px]">
        <h2 class="text-black font-bold text-[20px] md:text-[30px]">
          AltSchool
          <span class="underline text-green-600"> Frontend Engineering </span>
          Challenge
        </h2>
        <p class="text-black text-[16px] tracking-wide">
          Create a new vue js application using the cli then simulate a fake
          authentication experience using vuex and vue router. Make sure that
          you make provisions for wildcard routes a.k.a 404 pages. Also, your
          fake authentication experience should consist of the login route -
          ‘/login’, the sign up route - ‘/signup’ and the products route -
          ‘/products’.
        </p>

        <router-link
          to="/login"
          class="p-5 font-bold cursor-pointer border text-white text-center bg-green-600 hover:bg-opacity-0 hover:border-green-600 hover:text-green-600"
        >
          View Products
        </router-link>
      </div>
      <div class="w-[200px] md:w-[100%]">
        <Vue3Lottie :animationData="FlyingMan" />
      </div>
    </div>
  </main>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import { RouterLink } from "vue-router";
// import NavComponent from "../components/NavComponent.vue";
import "vue3-lottie/dist/style.css";
import FlyingMan from "../assets/flyingman.json";

export default {
  name: "home",
  data() {
    return {
      FlyingMan,
    };
  },
  components: {
    Vue3Lottie,
    RouterLink,
    // router,
  },
  mounted() {
    this.$store.commit("auth/intializeState");
  },
};
</script>
