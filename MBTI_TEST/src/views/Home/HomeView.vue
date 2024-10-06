<script setup lang="ts">
// import { ref } from "vue";
// import Layout from "@/components/Layout/index.vue";
// import Detail from "@/components/Detail/index.vue";
// import User from "@/components/User/index.vue";
// import Question from "@/components/Test/index.vue";
import Carousel from '@/components/Carousel/index.vue';
import Card from '@/components/Card/index.vue';
import Tag from '@/components/Tag/index.vue';
</script>

<template>
  <div class="c-home">
    <div class="c-home-img">
      <Carousel />
    </div>
    <div class="c-home-title header">通过MBTI测试, 你能获得什么?</div>
    <div class="c-home-card">
      <Card />
    </div>
    <div class="c-home-title footer">什么是MBTI测试</div>
    <div class="c-home-tag">
      <Tag />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-home {
  width: 100%;
  height: 100%;

  .c-home-title {
    font-size: 30px;
    text-align: center;
  }
  
  .header {
    margin-top: 20px;
  }

  .c-home-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .c-home-tag {
    margin-top: 20px;
  }
}
</style>
