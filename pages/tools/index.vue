<script setup lang="ts">
import Keyboard from './components/keyboard.vue';
import Screen from './components/screen.vue';
import SysInfo from './components/sysinfo.vue';
import Reaction from './components/reaction.vue';
</script>
<template>
  <div class="cb-index">
    <div class="cb-tools">
      <UDivider class="cb-tools-divider" label="系统信息" />
      <SysInfo />
      <UDivider class="cb-tools-divider" label="键盘检测工具" />
      <Keyboard />
      <UDivider class="cb-tools-divider" label="屏幕检测工具" />
      <Screen />
      <UDivider class="cb-tools-divider" label="反应速度测试" />
      <Reaction />
    </div>
  </div>
</template>
<style>
.cb-tools {
  min-width: 600px;
  max-width: 800px;

  margin-bottom: 20px;

  /* padding: 100px 0; */
  .cb-tools-divider {
    margin: 20px 0;
  }
}
</style>
