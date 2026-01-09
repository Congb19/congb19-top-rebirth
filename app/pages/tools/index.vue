<script setup lang="ts"></script>
<template>
  <div class="cb-index">
    <div class="cb-tools">
      <USeparator class="cb-tools-divider" label="系统信息" />
      <ToolsSysinfo />
      <USeparator class="cb-tools-divider" label="键盘检测工具" />
      <ToolsKeyboard />
      <USeparator class="cb-tools-divider" label="屏幕检测工具" />
      <ToolsScreen />
      <USeparator class="cb-tools-divider" label="反应速度测试" />
      <ToolsReaction />
    </div>
  </div>
</template>
<style>
.cb-tools {
  width: 100%;
  .cb-tools-divider {
    margin: 20px 0;
  }
}
</style>
