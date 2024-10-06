<script setup lang='ts'>
import cardData from './mock';
import { useRoute } from 'vue-router';
console.log(cardData);
const route = useRoute();
// 了解更多
const handleKnowMore = () => {
  console.log('handleKnowMore');
  route.push('/detail');
};
</script>

<template>
 <div>
  <div class="card-list">
    <div class="card-list-item" v-for="item in cardData" :key="item.id">
      <div class="card-list-item-content">
        <div class="card-list-item-content-entitle">{{ item.enTitle }}</div>
        <div class="card-list-item-content-title">{{ item.title }}</div>
        <div class="card-list-item-content-desc">
          <ul>
            <li v-for="(item, index) in item.content" :key="index">{{ item }}</li>
          </ul>
        </div>
        <button class="card-list-item-content-learn-more" @click="handleKnowMore">了解更多</button>
      </div>
    </div>
  </div>
 </div>
</template>

<style lang='scss' scoped>
.card-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-content: space-evenly;

  &-item {
    width: 400px;
    height: 600px;
    margin-top: 40px;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    // text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>