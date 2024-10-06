<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '@/store';
// 定义checks
const checks = reactive([
  { name: '人格介绍', path: '/' , isChecked: false},
  { name: '人格分析', path: '/detail', isChecked: false },
  { name: '人格测试', path: '/question', isChecked: false },
])
// 控制check 状态
// const isChecked = ref(false);
// 点击跳转
const clickToPage = (item) => {;
  item.isChecked = !item.isChecked;
}
</script>

<template>
 <div class="c-header">
  <div class="c-header-left">
    <div class="c-header-left-logo">MBTI-TEST</div>
  </div>
  <div class="c-header-main">
    <div class="c-header-main-check">
      <router-link v-for="(item, index) in checks" :key="index" :to="item.path" class="c-header-main-check-item" @click="clickToPage(item)">
        <span class="c-header-main-check-item-text">{{ item.name }}</span>
      </router-link>
    </div>
  </div>
  <div class="c-header-right">
    <div class="c-header-right-login">登录</div>
  </div>
 </div>
</template>

<style lang='scss' scoped>
.c-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  &-left {
    width: 20%;
    padding: 20px;
    font-size: 25px;
  }
  &-main {
    padding: 20px;
    width: 60%;
    &-check {
      display: flex;
      align-content: center;
      justify-content: center;
      &-item {
        cursor: pointer;
        font-weight: 600;
        font-size: 30px;
        padding: 0 10px;
        margin: 0 10px;
        color: #3F92F2;
        transition: all 0.3 ease;
        &-text {
          font-size: 30px;
        }
        &-text:hover {
          color: rgb(0,172,0);
        }
      }
    }
  }
  &-right {
    width: 20%;
    padding: 20px;
    &-login {
      cursor: pointer;
      width: 100px;
      height: 50px;
      text-align: center;
      margin: auto;
      background-color: aquamarine;
      border-radius: 10px;
      font-weight: 600;
      font-size: 20px;
      padding: 10px;
      color: #3F92F2;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    &-login:active {
      transform: translateY(2px);
      box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>