<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
// import { useStore } from '@/store/index';
const router = useRouter();
// 定义checks
const checks = reactive([
  { name: '首页', path: '/' , isChecked: false},
  { name: '人格类型', path: '/detail', isChecked: false },
  { name: '文章博客', path: '/blog', isChecked: false },
  { name: '人格测试', path: '/question', isChecked: false },
])
// 控制check 状态
// const isChecked = ref(false);
// 点击跳转
const clickToPage = (item) => {;
  item.isChecked = !item.isChecked;
}
// 登录页面
const checkToLogin = () => {
  router.push('/user');
}
</script>

<template>
 <div class="c-header">
  <div class="c-header-left">
    <div class="c-header-left-logo">Analytical MBTI</div>
  </div>
  <div class="c-header-main">
    <div class="c-header-main-check">
      <router-link v-for="(item, index) in checks" :key="index" :to="item.path" class="c-header-main-check-item" @click="clickToPage(item)">
        <!-- <div class="c-header-main-check-item-line" v-if="item.isChecked"></div> -->
        <span class="c-header-main-check-item-text">{{ item.name }}</span>
      </router-link>
    </div>
  </div>
  <div class="c-header-right">
    <div class="c-header-right-login" @click="checkToLogin">登录</div>
  </div>
 </div>
</template>

<style lang='scss' scoped>
.c-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  width: 100%;

  &-left {
    min-width: 200px;
    width: 15%;
    font-size: 25px;
  }
  &-main {
    padding: 10px;
    width: 75%;
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
        position: relative;
        &-text {
          font-size: 30px;
        }
        &-text:hover {
          color: rgb(0,172,0);
        }
        &-line {
          position: absolute;
          top: 2px;
        }
      }
    }
  }
  &-right {
    width: 10%;
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