<template>
  <!-- <NavComponent /> -->
  <main
    class="mt-10 md:mt-0 flex flex-col h-[100vh] md:flex-row p-5 md:p-3 justify-between items-center"
  >
    <div class="flex flex-col max-w-[500px] w-full :">
      <h1 class="text-[30px] text-black font-bold mb-5">
        Welcome Back, <span class="text-green-600"> Sign In </span>
      </h1>
      <!-- form  -->
      <form @submit.prevent="onLogin" class="flex flex-col gap-5">
        <div class="flex flex-col gap-5">
          <label class="text-black text-[16px] font-semibold"> Email </label>
          <input
            type="email"
            v-model="email"
            required
            placeholder="oscarmesh123@gmail.com"
            class="p-5 border border-green-600 text-[16px] text-black w-full"
          />
        </div>
        <div v-if="errors.email">
          <p class="text-red-600">{{ errors.email }}</p>
        </div>
        <div class="flex flex-col gap-5">
          <label class="text-black text-[16px] font-semibold"> Password </label>
          <input
            type="password"
            v-model="password"
            placeholder="**********"
            required
            class="p-5 border border-green-600 text-[16px] text-black w-full"
          />
        </div>
        <div v-if="errors.password">
          <p class="text-red-600">{{ errors.password }}</p>
        </div>
        <button
          type="submit"
          class="p-5 bg-green-600 border text-white text-[16px] font-semibold hover:bg-opacity-0 hover:border-green-600 hover:text-green-600"
        >
          Sign In
        </button>
      </form>
      <!-- form  -->
      <p class="text-gray-600 mt-5">
        Don't have an account?
        <RouterLink to="/register" class="text-green-600 hover:font-bold">
          Sign Up
        </RouterLink>
      </p>
    </div>
    <img
      src="../assets/mobile.png"
      class="w-[500px] h-[500px] cover hidden md:flex"
    />
  </main>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import SignupValidations from "../utils/SignupValidations";
import { useToast } from "vue-toastification";
// import NavComponent from "../components/NavComponent.vue";

export default {
  name: "login",
  components: {
    RouterLink,
    RouterView,
    // NavComponent,
  },
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      user: [],
    };
  },
  methods: {
    onLogin() {
      let validations = new SignupValidations(this.email, this.password);
      const toast = useToast();
      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
      if (
        this.email === this.user.email &&
        this.password === this.user.password
      ) {
        this.$store.commit("auth/login");
        toast.success("Login Successful");
      } else {
        toast.error("Invalid Credentials");
      }
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log(this.user);
  },
};
</script>
