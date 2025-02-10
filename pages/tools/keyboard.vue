<template>
  <div class="keyboard-container">
    <div class="status-header">
      <div class="counter">按键数量: {{ keyCount }}</div>
      <div class="last-key">最后按键: {{ lastKey || '无' }}</div>
    </div>

    <div class="keyboard-grid">
      <div
        v-for="(value, key) in activeKeys"
        :key="key"
        class="key-block"
        :class="{ active: value }"
      >
        <div class="key-label">
          {{ formatKeyName(key) }}
        </div>
        <div class="key-state">
          {{ value ? '按下' : '抬起' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref, computed } from 'vue'
// import { useEventListener } from '@vueuse/core'

const activeKeys = ref({});
const lastKey = ref('');

// 按键数量计算属性
const keyCount = computed(() => Object.keys(activeKeys.value).length);

// 格式化特殊按键名称
const formatKeyName = (key) => {
  console.log('press:', key);
  const specialKeys = {
    ' ': 'Space',
    ArrowUp: '↑',
    ArrowDown: '↓',
    ArrowLeft: '←',
    ArrowRight: '→',
    Control: 'Control',
    Meta: 'Win/Cmd',
    AltGraph: 'Alt/Option',
    Alt: 'Alt/Option'
  };
  return specialKeys[key] || key?.toUpperCase();
};

// 处理按键按下
useEventListener(document, 'keydown', (event) => {
  if (!activeKeys.value[event.key]) {
    activeKeys.value[event.key] = true;
    lastKey.value = formatKeyName(event.key);
    event.preventDefault(); // 防止默认行为
  }
});

// 处理按键释放
useEventListener(document, 'keyup', (event) => {
  activeKeys.value[event.key] = false;
  setTimeout(() => {
    delete activeKeys.value[event.key];
  }, 100); // 添加短暂延迟以获得更好的视觉效果
});
</script>

<style scoped>
.keyboard-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.status-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  background: #ffffff;
  border-radius: 8px;
}

.keyboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
}

.key-block {
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  transition: all 0.2s ease;
}

.key-block.active {
  background: #4caf50;
  border-color: #388e3c;
  color: white;
  transform: scale(1.05);
}

.key-label {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
}

.key-state {
  font-size: 0.9em;
  opacity: 0.8;
}

.counter,
.last-key {
  font-weight: bold;
  color: #666;
}
</style>
