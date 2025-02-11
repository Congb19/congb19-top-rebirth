<template>
  <div>
    <UButton size="md" v-if="!isTesting" @click="startTest">
      开始屏幕检测
    </UButton>

    <div
      v-show="isTesting"
      ref="container"
      class="color-screen"
      :style="{ backgroundColor: currentColor.value }"
    >
      <div v-show="showColorInfo" class="color-info">
        <div class="color-name">{{ currentColor.name }}</div>
        <div class="instruction">← → 切换颜色 | ESC 退出检测</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isTesting = ref(false);
const showColorInfo = ref(false);
const showColorTimer = ref(null);
const container = ref(null);
const { enter, exit, isFullscreen } = useFullscreen(container);

const colors = ref([
  { name: '红色', value: '#ff0000' },
  { name: '绿色', value: '#00ff00' },
  { name: '蓝色', value: '#0000ff' },
  { name: '白色', value: '#ffffff' },
  { name: '黑色', value: '#000000' },
  { name: '灰色', value: '#808080' }
]);

const currentColorIndex = ref(0);

const currentColor = computed(() => colors.value[currentColorIndex.value]);

const showColor = () => {
  showColorInfo.value = true;
  clearTimeout(showColorTimer.value);
  showColorTimer.value = setTimeout(() => {
    showColorInfo.value = false;
  }, 1000);
};

const startTest = async () => {
  isTesting.value = true;
  await enter();
  showColor();
};

// 处理键盘操作
useEventListener(document, 'keydown', (e) => {
  if (!isTesting.value) return;

  switch (e.key) {
    case 'ArrowLeft':
      currentColorIndex.value =
        (currentColorIndex.value - 1 + colors.value.length) %
        colors.value.length;
      showColor();
      break;
    case 'ArrowRight':
      currentColorIndex.value =
        (currentColorIndex.value + 1) % colors.value.length;
      showColor();
      break;
    case 'Escape':
      exit();
      isTesting.value = false;
      break;
  }
});

// 监听全屏状态变化
useEventListener(document, 'fullscreenchange', () => {
  if (!isFullscreen.value) {
    isTesting.value = false;
  }
});
</script>

<style scoped>
.color-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: background-color 0.3s ease;
}

.color-info {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 15px 30px;
  border-radius: 10px;
  color: white;
}

.color-name {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.instruction {
  font-size: 1.2em;
  opacity: 0.9;
}
</style>
