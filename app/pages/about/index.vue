<script setup>
const app1Store = useApp1Store();
await callOnce(app1Store.fetch);
</script>

<template>
  <div class="cb-index cb-margin-y gap-4">
  </div>
</template>
<style></style>
