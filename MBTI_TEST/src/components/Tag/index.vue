<script setup lang='ts'>
import { headData, bodyData, tagData } from './mock';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
 <div class="tag-content">
  <div class="tag-content-head">{{ headData }}</div>
  <img src="../../assets/Img/Home/Home2.png" alt="">
  <div class="tag-content-body">{{ bodyData }}</div>
  <div class="tag-content-tsc">
    <div class="tag-content-tsc-item" v-for="item in tagData" :key="item">
      <div class="tag-content-tsc-item-title">
        {{ item.title }}
      </div>
      <div class="tag-content-tsc-item-description">
        {{ item.description }}
      </div>
    </div>
  </div>
  <div class="tag-content-btn" @click="router.push('/question')">开始测试</div>
 </div>
</template>

<style lang='scss' scoped>
.tag-content {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 30px 30px;
  border-radius: 50px;
  background-color: #fff;
  &-head {
    margin-bottom: 20px;
  }
  &-body {
    margin-top: 20px;
  }
  &-tsc {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    &-item {
      width: 30%;
      &-title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      &-description {
        font-size: 16px;
      }
    }
  }
  &-btn {
    width: 160px;
    height: 60px;
    padding-top: 10px;
    background-color: rgb(215, 224, 250);
    line-height: 40px;
    text-align: center;
    border-radius: 20px;
    margin-top: 30px;
    cursor: pointer;
    &:hover {
      background-color: rgb(158, 185, 255);
      color: #fff;
    }
  }
}
</style>