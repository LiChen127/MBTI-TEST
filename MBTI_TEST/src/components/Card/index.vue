<script setup lang='ts'>
import cardData from './mock';
import { useRouter } from 'vue-router';
console.log(cardData);
const router = useRouter();
// 了解更多
const handleKnowMore = () => {
  console.log('handleKnowMore');
  router.push('/detail');
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
            <li v-for="(item, index) in item.content" :key="index">
              <span></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <button class="card-list-item-content-btn" @click="handleKnowMore">
          <span style="margin-right: 5px">了解更多</span>
          <span>>>></span>
        </button>
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
    width: 450px;
    height: 500px;
    margin: 20px 40px 20px 0;
    display: flex;
    flex-direction: column;
    align-items:first baseline;
    justify-content: flex-start;
    background-color: #f5f5f5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }

    &-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &-entitle {
        font-size: 24px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        color: rgb(100, 70, 184);
        margin: 10px 0 10px 0;
        font-weight: 500;
      }

      &-title {
        font-size: 32px;
        font-family:fantasy;
        // 字体间距
        letter-spacing: 5px;
        color: rgb(184, 144, 70);
        margin-bottom: 10px;
      }
      &-desc {
        width: 100%;
        margin-bottom: 30px;

        ul {
          list-style: none;
          li:nth-child(n) {
            margin-bottom: 10px;
            display: flex;
            align-items: center;

            span:nth-child(1) {
              width: 15px;
              height: 15px;
              margin-right: 4px;
              border-radius: 50%;
              background-color: rgb(202, 114, 0);
            }
            span:nth-child(2) {
              font-size: 20px;
            }
          }
          
        }
       }
      &-btn {
        width: 160px;
        height: 50px;
        background-color: rgb(70, 184, 175);
        color: white;
        border-radius: 5px;
        font-size: 16px;
        border: 0;
      }
      &-btn:hover {
        background-color: rgb(85, 219, 166);
        cursor: pointer;
        color: rgb(187, 255, 0);
      }
    }
  }
}
</style>