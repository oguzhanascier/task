<template>
  <commonArea />
  <productCard />
  
</template>

<script>
import commonArea from "@/components/header/commonArea.vue";
import productCard from "@/components/product/productCard.vue";
export default {
  name: "HomeView",
  components: {
    commonArea,
    productCard
  },
};
</script>
