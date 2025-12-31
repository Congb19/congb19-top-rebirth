<script setup lang="ts">
useSeoMeta({
  title: '你在烦恼什么',
  ogTitle: '你在烦恼什么',
  description: 'Congb19的小屋',
  ogDescription: 'Congb19的小屋',
  ogImage: '/imgs/logo.jpg',
  twitterCard: 'summary_large_image'
});
const tooltipConfig = {
  delayDuration: 300
};
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <UApp :tooltip="tooltipConfig">
      <NuxtLayout>
        <NuxtPage keepalive />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<style>
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
</style>
