<script setup lang='ts'>
import { typesGrouped } from './mock';
import { getChineseType } from '../../../hooks/PersonalityChange';
import { useRouter } from 'vue-router';
const router = useRouter();
// 跳转到对应type
const goToDetail = (type) => {
  router.push({
    path: `/detail/${type}`
  })
}
</script>

<template>
 <div class="d-detail">
  <div class="d-detail-group">
    <div class="d-detail-group-category" v-for="(group, index) in typesGrouped" :id="index">
      <div class="d-detail-group-category-title">{{ group.category }}</div>
      <div class="d-detail-group-category-box" v-for="(item, index) in group.types" :id="index" >
        <div class="d-detail-group-category-box-wrapper">
          <img :src="item.url" style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0">
          <div class="d-detail-group-category-box-wrapper-body" @click="goToDetail(item.type)" style="cursor: pointer">
            <div class="d-detail-group-category-box-wrapper-body-type">
              {{ item.type }} ({{ getChineseType(item.type) }})
            </div>
            <div class="d-detail-group-category-box-wrapper-body-content content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<style lang='scss' scoped>
.d-detail {
  width: 100%;
  max-height: 1200px;
  height: 2000px;
  
  &-group {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-category {
      width: 100%;
      height: calc(2000px / 4);
      position: relative;
      display: flex;
      align-content: space-evenly;


      &:nth-child(1) {
        color: rgb(38, 9, 105);
        background-color: rgb(233, 234, 224);

        .content {
          color: rgba(39, 162, 245, 0.952);
        }
      }
      &:nth-child(2) {
        color:  rgb(7, 182, 54);
        background-color: rgb(213, 235, 226);

        .content {
          color: rgba(56, 27, 161, 0.979);
        }
      }
      &:nth-child(3) {
        color: rgb(8, 78, 143);
        background-color: rgb(217, 234, 240);
        
        .content {
          color: rgb(230, 186, 103);
        }
      }
      &:nth-child(4) {
        color: rgb(85, 49, 1);
        background-color: rgb(249, 238, 216);

        .content {
          color: rgba(138, 11, 117, 0.767);
        }
      }

      &-title {
        z-index: 10;
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 25px;
      }

      &-box {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;

        &-wrapper {
          height: 100%;
          position: relative;
          flex: 1;

          &-body {
            position: absolute;
            bottom: 50px;
            width: 90%;
            margin: 0 5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1;

            &-type {
              font-size: 25px;
              font-family:Verdana, Geneva, Tahoma, sans-serif;
              font-weight: bold;
              margin-bottom: 10px;
            }

            &-content {
              font-size: 20px; 
              font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>