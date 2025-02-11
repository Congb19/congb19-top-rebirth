<script setup lang="ts"></script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage keepalive />
    </NuxtLayout>
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
