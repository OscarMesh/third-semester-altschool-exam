<template>
  <div class="h-[100%] mt-4 relative">
    <div class="flex flex-row gap-5 mb-9 px-3 md:px-0">
      <font-awesome-icon
        icon="fa-solid fa-user-secret"
        width="30"
        class="bg-green-600 p-3 rounded-full text-white text-[30px] items-center justify-center"
      />
      <div class="flex flex-col">
        <h1 class="text-black text-[18px] font-bold">
          Welcome
          <span class="text-green-600"> {{ user }}</span>
        </h1>
        <h2 class="font-medium">These are your available products</h2>
      </div>
    </div>

    <div
      v-if="loading"
      class="flex justify-center m-auto h-[100vh] items-center"
    >
      <p class="text-center">Loading...</p>
    </div>
    <div
      v-else
      class="flex flex-col md:p-6 lg:p-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-center justify-center mb-6"
    >
      <div
        @click="
          () => $router.push({ name: 'product', params: { id: product.id } })
        "
        v-for="product in products"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { RouterLink, RouterView } from "vue-router";
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "products",
  components: {
    RouterLink,
    RouterView,
    ProductCard,
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user.username,
    }),
    ...mapState("products", {
      loading: (state) => state.isLoading,
      products: (state) => state.products.products,
    }),
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.user);
    this.$store.dispatch("products/getProducts");
  },
};
</script>
