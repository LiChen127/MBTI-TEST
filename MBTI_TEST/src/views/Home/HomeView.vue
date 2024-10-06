<script setup lang="ts">
// import { ref } from "vue";
// import Layout from "@/components/Layout/index.vue";
// import Detail from "@/components/Detail/index.vue";
// import User from "@/components/User/index.vue";
// import Question from "@/components/Test/index.vue";
import Carousel from '@/components/Carousel/index.vue';
import Card from '@/components/Card/index.vue';
</script>

<template>
  <div class="c-home">
    <div class="c-home-img">
      <Carousel />
    </div>
    <div class="c-home-card">
      <Card />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-home {
  width: 100%;
  height: 100%;
  
  .c-home-card {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
