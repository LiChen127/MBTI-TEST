<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllDetail, getDetailByType, getDetalBysearch, getDetailByPage } from '@/api/detail/detail';
import DetailTag from '@/components/Tag/DetailTag/index.vue';

const AllDetails = ref([]);
const getDetails = async () => {
  const res = await getAllDetail();
  AllDetails.value = res.data;
};
onMounted(async () => {
  await getDetails();
});
</script>
<template>
  <div class="d-list">
    <DetailTag />
  </div>
</template>

<style lang="scss" scoped></style>
