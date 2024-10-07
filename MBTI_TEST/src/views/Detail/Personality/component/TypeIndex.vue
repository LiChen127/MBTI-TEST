<script setup lang='ts'>
import { reactive, ref } from 'vue'; 
const totalData = defineProps({
  data: Object,
  type: String
});
const data = reactive({
  id: totalData.data.id,
  type: totalData.type,
  advantage: totalData.data.advantages_title,
  disadvantage: totalData.data.disadvantages_title,
  advantageDetail: totalData.data.advantages_detail,
  disadvantageDetail: totalData.data.disadvantages_detail,
  ResolveProblemWay: totalData.data.way_to_resolve_problem,
  carrerAdvice: totalData.data.career_advice,
  initialAdvice: totalData.data.initial_advice,
  developAdvice: totalData.data.development_advice
});
</script>

<template>
 <div class="t-main"></div>
</template>

<style lang='scss' scoped>
.t-main {
  width: 80%;
  background-color: rgb(255, 255, 255);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
</style>