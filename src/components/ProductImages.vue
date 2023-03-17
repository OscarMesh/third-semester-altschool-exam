<template lang="">
  <div class="flex flex-row gap-2 mt-5">
    <img
      v-for="image in images"
      :src="image"
      class="w-[50px] h-[50px] md:w-[70px] md:h-[70px] object-cover first-letter hover:scale-110 transition duration-300 ease-in-out"
      alt="product"
    />
  </div>
</template>
<script>
import { RouterView, useRoute, useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "",
  components: {},
  data() {
    return {
      images: [],
    };
  },
  methods: {
    fetchImages() {
      const route = useRoute();
      const { id } = route.params;
      const endpoint = `https://dummyjson.com/products/${id}`;
      axios
        .get(endpoint)
        .then((res) => {
          console.log(res.data.images);
          this.images = res.data.images;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.fetchImages();
  },
};
</script>
<style lang=""></style>
