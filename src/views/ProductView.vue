<template>
  <div>
    <div
      class="flex flex-col mb-4 justify-center md:p-5 md:flex-row items-center md:justify-between h-[100vh]"
    >
      <img
        :src="product.thumbnail"
        class="w-[300px] h-[200px] lg:w-[500px] md:h-[500px] object-cover hover:scale-110 transition duration-300 ease-in-out"
        alt="product"
      />
      <div
        class="max-w-[500px] gap-5 flex flex-col items-center md:items-start"
      >
        <h1 class="text-2xl font-bold text-gray-600 mt-5">
          {{ product.title }}
        </h1>

        <p class="font-bold">
          <span class="mr-2">
            <font-awesome-icon
              icon="fa-solid fa-star"
              class="text-green-600 text-[16px] font-bold"
            />
          </span>
          {{ product.rating }}
        </p>
        <div
          class="flex flex-col max-w-[300px] items-center md:items-start gap-1"
        >
          <h2 class="font-bold">Description:</h2>
          <p>{{ product.description }}</p>
        </div>
        <div class="flex flex-col items-center md:items-start gap-1">
          <h2 class="font-bold">Category:</h2>
          <p class="bg-green-500 p-3 text-white w-fit capitalize">
            {{ product.category }}
          </p>
        </div>
        <div class="flex flex-col items-center md:items-start gap-1">
          <h2 class="font-bold">Price:</h2>
          <p class="font-bold text-green-600 text-[22px]">
            ${{ product.price }}
          </p>
        </div>
        <div>
          <RouterLink
            :to="{
              name: 'product-images',
              // params: { id: product.id },
            }"
          >
            <h2
              class="p-3 border border-gray-600 hover:bg-green-600 hover:text-white w-fit mb-3 text-center md:text-left"
            >
              Show Other Images
            </h2>
          </RouterLink>
          <hr />
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView, useRoute, useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "product",
  data() {
    return {
      product: {},
    };
  },
  methods: {
    fetchProduct() {
      const route = useRoute();
      const { id } = route.params;
      const endpoint = `https://dummyjson.com/products/${id}`;
      axios
        .get(endpoint)
        .then((res) => {
          this.product = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.fetchProduct();
  },
};
</script>
