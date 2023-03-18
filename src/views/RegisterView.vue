<template>
  <!-- <NavComponent /> -->
  <main
    class="mt-10 flex flex-col h-[100vh] md:flex-row p-5 md:p-3 justify-between items-cente"
  >
    <div class="flex flex-col w-full">
      <h1 class="text-[30px] text-black font-bold mb-5">
        Welcome, <span class="text-green-600"> Sign Up</span>
      </h1>
      <!-- form  -->
      <form @submit.prevent="onRegister()" class="flex flex-col gap-5">
        <div class="flex flex-col gap-5">
          <label class="text-black text-[16px] font-semibold"> Username </label>
          <input
            type="text"
            v-model="username"
            required
            placeholder="Oscar Mesh"
            class="p-5 border border-green-600 text-[16px] text-black w-full"
          />
        </div>
        <div v-if="errors.username">
          <p class="text-red-600">{{ errors.username }}</p>
        </div>
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
            required
            placeholder="**********"
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
          Sign up
        </button>
      </form>
      <!-- form  -->
      <p class="text-gray-600 mt-5">
        Already have an account?
        <RouterLink to="/login" class="text-green-600 hover:font-bold">
          Login
        </RouterLink>
      </p>
    </div>
    <img
      src="../assets/signup.png"
      class="object-cover w-[500px] h-[500px] cover hidden md:flex"
    />
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { RouterLink, RouterView } from "vue-router";
import SignupValidations from "../utils/SignupValidations";
import { useToast } from "vue-toastification";
export default {
  name: "RegisterView",
  components: {
    RouterLink,
    RouterView,
    // NavComponent,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    ...mapActions({
      register: "auth/register",
    }),
    onRegister() {
      const toast = useToast();
      let validations = new SignupValidations(
        this.email,
        this.password,
        this.username
      );
      this.errors = validations.checkValidations();
      if (this.errors.length) {
        return false;
      }
      this.$store.commit("auth/register", {
        email: this.email,
        password: this.password,
        username: this.username,
      });
      toast.success("You have successfully registered");
      this.$router.push("/login");
    },
  },
  mounted() {
    this.$store.commit("auth/clearUser");
  },
};
</script>
