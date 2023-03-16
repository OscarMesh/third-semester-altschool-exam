<template>
  <main>
    <div class="flex flex-row justify-between items-center mt-10">
      <div class="flex flex-col gap-7 max-w-[500px]">
        <h2 class="text-black font-bold text-[30px]">
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

        <button
          class="p-5 font-bold cursor-pointer border text-white bg-green-600 hover:bg-opacity-0 hover:border-green-600 hover:text-green-600"
        >
          <RouterLink to="/products"> View Products</RouterLink>
        </button>
      </div>
      <div>
        <Vue3Lottie :animationData="FlyingMan" />
      </div>
    </div>
  </main>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import { RouterLink } from "vue-router";
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
  },
  methods: {
    onProducts() {
      this.$router.push("/products");
    },
  },
};
</script>
