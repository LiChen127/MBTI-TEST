<script setup lang="ts">
import { getDetailByType } from '../../../api/detail/detail';
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import TypeIndex from './component/TypeIndex.vue';
import { onBeforeMount, onMounted } from 'vue';
const route = useRoute();
// 获取当前页面所属type
const type = ref('');
// DOM 渲染前获取到type
onBeforeMount(() => {
  type.value = route.params.type;
})
// 根据type获取data
const data = ref([]);
// Fn
const getDataByType = async (type) => {
  return await getDetailByType(type);
}
onMounted(async () => {
  // data.value = await getDataByType(type.value);
  const res = await getDataByType(type.value);
  data.value = res.data;
  console.log(data.value);
})
</script>

<template>
  <div class="p-container">
    <TypeIndex :data="data" :type="type"/>
  </div>
</template>

<style lang="scss" scoped>
.p-container {
  width: 100%;
  // background: #000;
  height: 1400px;
}
</style>
