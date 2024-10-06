<script setup lang='ts'>
import Header from './Header.vue';
</script>

<template>
 <main>
  <div class="c-layout-header">
    <Header />
  </div>
  <div class="c-layout-main">
    <slot></slot>
  </div>
 </main>
</template>

<style lang='scss' scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .c-layout-header {
    max-height: 20%;
    width: 100%;
    margin: 0 auto;
    min-width: 860px;
    // font-family: Georgia, 'Times New Roman', Times, serif;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
  .c-layout-main {
    width: 80%;
  } 
}
</style>