<template>
  <h3>System:</h3>
  <li v-for="item in info.system">{{ item.label + ': ' + item.value }}</li>
  <h3>Browser:</h3>
  <li v-for="item in info.browser">{{ item.label + ': ' + item.value }}</li>
  <h3>Help:</h3>
  <li>分辨率为逻辑像素，即 分辨率=屏幕分辨率/总缩放倍率；</li>
  <li>
    总缩放倍率=系统缩放倍率×浏览器缩放倍率（例如，系统125%，浏览器100%，则总1.25）；
  </li>
</template>
<script setup lang="ts">
// import {
//   useOnline,
//   useBattery,
//   useFps,
//   useWindowSize,
//   useDevicePixelRatio
// } from '@vueuse/core';
import { reactive } from 'vue';
// import { NLi } from 'naive-ui';
const online = useOnline();
const battery = useBattery();
const fps = useFps();
const size = useWindowSize();
const ratio = useDevicePixelRatio();

const info = reactive({
  system: [
    { label: '网络在线', value: online },
    { label: '是否有电池', value: battery.isSupported },
    { label: '电量', value: battery.level }
  ],
  browser: [
    { label: '刷新率', value: fps },
    { label: '分辨率(宽)', value: size.width },
    { label: '分辨率(高)', value: size.height },
    { label: '总缩放倍率', value: ratio.pixelRatio }
  ]
});
console.log(info);
</script>
