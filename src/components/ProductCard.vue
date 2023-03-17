<template>
  <div
    @click="$router.push(`/products/${product.id}`)"
    class="bg-[#fbfbfb] h-[100%] w-[250px] overflow-hidden cursor-pointer hover:shadow-2xl"
  >
    <img :src="product.thumbnail" alt="" class="h-[200px] w-full cover" />
    <div class="p-6 flex flex-col gap-2">
      <div class="flex flex-row justify-between items-center">
        <h1 class="text-black text-[18px] font-semibold">
          {{ product.title }}
        </h1>
        <font-awesome-icon
          icon="fa-solid fa-bookmark"
          class="text-green-600 text-[16px] font-bold"
        />
      </div>
      <div class="max-w-[150px]">
        <p class="truncate text-green-600">
          {{ product.description }}
        </p>
      </div>
      <!-- reviews -->
      <div class="flex flex-row items-center gap-2">
        <font-awesome-icon
          icon="fa-solid fa-star"
          class="text-yellow-400 text-[16px] font-bold"
        />
        <p class="font-bold">
          {{ product.rating }}
          <span class="text-gray-300 font-medium ml-1">(1112 Reviews)</span>
        </p>
      </div>
      <!-- price and Category -->
    </div>
    <div class="flex flex-row justify-between items-center">
      <p class="px-2 mb-3 font-bold text-[18px]">$ {{ product.price }}</p>
      <p class="bg-green-500 p-3 text-white">{{ product.category }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
