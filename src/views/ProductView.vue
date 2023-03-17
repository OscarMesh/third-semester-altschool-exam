<template>
  <div class="flex flex-col items-center justify-center">
    <!-- <div class="flex flex-col items-center justify-center">
      <img
        :src="product.thumbnail"
        class="w-[300px] h-[300px] object-cover"
        alt="product"
      />
      <h1 class="text-2xl font-bold text-gray-600 mt-5">{{ product.title }}</h1>
      <p class="text-gray-600 mt-5">{{ product.description }}</p>
      <p class="text-gray-600 mt-5">{{ product.price }}</p>
    </div> -->
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "product",
  data() {
    return {};
  },
  methods: {
    fetchProduct() {
      const router = useRouter();
      const route = useRoute();
      const { productId } = route.params;
      const endpoint = `https://dummyjson.com/products/${productId}`;
      axios
        .get(endpoint)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    console.log(this.$route.params.productId);
    fetchProduct();
  },
};
</script>
