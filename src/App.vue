<template>
  <div class="m-auto max-w-[1100px] font-raleway">
    <NavComponent />
    <hr />
    <router-view></router-view>
  </div>
  <p class="text-center h-[100%] text-gray-600 bottom-0">
    @oscarMesh AltSchool 3rd semester exam 2023
  </p>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import NavComponent from "./components/NavComponent.vue";
export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    NavComponent,
  },
  mounted() {
    this.$store.getters["auth/isAuthenticated"];
  },
};
</script>
