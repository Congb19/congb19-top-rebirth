<script setup lang="ts">
import ToolsSysinfo from '@/components/tools/sysinfo.vue';
import ToolsKeyboard from '@/components/tools/keyboard.vue';
import ToolsScreen from '@/components/tools/screen.vue';
import ToolsReaction from '@/components/tools/reaction.vue';
const tools = [
  {
    label: '系统信息',
    icon: 'i-material-symbols-info-outline-rounded',
    component: ToolsSysinfo
  },
  {
    label: '键盘检测工具',
    icon: 'i-material-symbols-keyboard-alt-outline-rounded',
    component: ToolsKeyboard
  },
  {
    label: '屏幕检测工具',
    icon: 'i-material-symbols-screen-search-desktop-outline-rounded',
    component: ToolsScreen
  },
  {
    label: '反应速度测试',
    icon: 'i-material-symbols-highlight-mouse-cursor-rounded',
    component: ToolsReaction
  }
];
</script>
<template>
  <div class="cb-index">
    <UPageHeader title="Tools" description="" />
    <UAccordion type="multiple" :items="tools" :unmount-on-hide="true" :default-value="['0']">
      <template #body="{ item }">
        <component :is="item.component"></component>
      </template>
    </UAccordion>
  </div>
</template>
<style></style>
