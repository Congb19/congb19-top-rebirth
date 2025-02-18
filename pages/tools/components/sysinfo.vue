
<script setup lang="ts">
const online = useOnline();
const battery = useBattery();
const fps = useFps();
const size = useWindowSize();
const ratio = useDevicePixelRatio();

const info = reactive({
  system: [
    { label: '网络在线', value: online },
    { label: '是否有电池', value: battery.isSupported },
    { label: '电量', value: Number(battery.level.value) * 100 + '%' }
  ],
  browser: [
    { label: '刷新率', value: fps },
    { label: '逻辑分辨率(宽)', value: size.width },
    { label: '逻辑分辨率(高)', value: size.height },
    { label: '总缩放倍率', value: ratio.pixelRatio }
  ]
});
console.log(info);
</script>

<template>
  <UCard>
    <template #header>
      <h3>系统信息:</h3>
      <li v-for="item in info.system">{{ item.label + ': ' + item.value }}</li>
    </template>

    <h3>浏览器相关:</h3>
    <li v-for="item in info.browser">{{ item.label + ': ' + item.value }}</li>
  </UCard>
</template>