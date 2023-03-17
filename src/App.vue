<template>
  <div class="m-auto h-[100%] max-w-[1100px] font-raleway">
    <NavComponent />
    <hr />
    <RouterView />
    <p class="text-center text-gray-600 bottom-0">
      @oscarMesh AltSchool 3rd semester exam 2023
    </p>
  </div>
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
    this.$store.commit("auth/intializeState");
  },
};
</script>
