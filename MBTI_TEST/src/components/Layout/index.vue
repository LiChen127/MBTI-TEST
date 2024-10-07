<script setup lang='ts'>
import Header from './Header.vue';
</script>

<template>
 <main>
  <div class="c-layout-header">
    <Header />
  </div>
  <div class="c-layout-main">
    <!-- 主体内容 -->
    <slot></slot>
  </div>
 </main>
</template>

<style lang='scss' scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  // height: 2500px;
  min-width: 1000px;
  position: relative;

  .c-layout-header {
    max-height: 100px;
    width: 100%;
    margin: 0 auto;
    min-width: 900px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: #fff;
  }
  .c-layout-main {
    padding-top: 90px; /* 根据Header的高度调整 */
    // height: calc(2500px - 10px); /* 减去Header的高度 */
    width: 100%;
    margin: 0 auto;
    background-color: rgb(235, 243, 242);
  }
}
</style>