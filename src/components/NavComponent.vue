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
        v-if="isLoggedIn == false"
        class="p-2 border text-green-600 cursor-pointer border-green-600 hover:bg-green-600 hover:text-white"
      >
        <RouterLink to="/login">Login</RouterLink>
      </li>
      <li
        v-if="isLoggedIn == true"
        @click="onLogout()"
        class="p-2 border text-green-600 cursor-pointer border-green-600 hover:bg-green-600 hover:text-white"
      >
        <a href="/">Logout</a>
      </li>
      <li
        class="p-2 cursor-pointer border text-white bg-green-600 hover:bg-opacity-0 hover:border-green-600 hover:text-green-600"
      >
        <RouterLink to="/register">Register</RouterLink>
      </li>
      <li
        v-if="isLoggedIn == true"
        class="p-2 cursor-pointer border text-white bg-green-600 hover:bg-opacity-0 hover:border-green-600 hover:text-green-600"
      >
        <RouterLink to="/products">Products</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import { useToast } from "vue-toastification";

export default {
  name: "NavComponent",
  data() {},
  methods: {
    onLogout() {
      const toast = useToast();
      this.$store.commit("auth/logout");
      this.$router.push("/login");
      toast.success("Logout Successful");
    },
  },
  computed: {
    ...mapState("auth", {
      isLoggedIn: (state) => state.isLoggedIn,
    }),
  },
};
</script>
