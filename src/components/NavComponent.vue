<template>
  <nav class="flex flex-row items-center w-full justify-between p-4">
    <div class="flex flex-row gap-1">
      <h1 class="font-bold text-green-600 tracking-wider text-[18px]">
        <font-awesome-icon icon="fa-solid fa-code" />
      </h1>
      <h1 class="font-bold tracking-wider text-[18px]">
        <RouterLink to="/"
          >Oscar<span class="text-green-600">Mesh</span>
        </RouterLink>
      </h1>
    </div>

    <ul class="flex flex-row justify-between items-center gap-3">
      <li
        v-if="!isLoggedIn"
        class="p-2 border text-green-600 cursor-pointer border-green-600 hover:bg-green-600 hover:text-white"
      >
        <RouterLink to="/login">Login</RouterLink>
      </li>
      <li
        v-if="isLoggedIn"
        @click="onLogout"
        class="p-2 border text-green-600 cursor-pointer border-green-600 hover:bg-green-600 hover:text-white"
      >
        <p>Logout</p>
      </li>
      <li
        v-if="!isLoggedIn"
        class="p-2 cursor-pointer border text-white bg-green-600 hover:bg-opacity-0 hover:border-green-600 hover:text-green-600"
      >
        <router-link to="/register">Register</router-link>
      </li>
      <li
        class="p-2 cursor-pointer border text-white bg-green-600 hover:bg-opacity-0 hover:border-green-600 hover:text-green-600"
      >
        <router-link to="/products">Products</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
// import { mapState } from "vuex";
import { RouterLink } from "vue-router";
export default {
  name: "NavComponent",
  data() {
    return {};
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isAuthenticated"];
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
    },
  },
  components: {
    RouterLink,
  },
};
</script>
