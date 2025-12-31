<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first());
console.log('cc home!', home);
</script>
<template>
  <div class="cb-index">
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>not found</div>
  </div>
</template>
<style></style>
