<script setup>
import createScene from './core/createScene';
import connectServer from './core/connectServer';

import renderTable from './render/renderTable';
import renderMajTile from './render/renderMajTile';

const container = ref();
const containerWidth = 800;
const containerHeight = 450;

const threeJsState = reactive({
  scene: null,
  camera: null,
  container: null,
  renderer: null
});

// connection
const isConnected = ref(false);
const transport = ref('');
const connect = () => {
  const connection = connectServer();
  isConnected.value = connection.isConnected;
  transport.value = connection.transport;
};

const test = () => {
  renderMajTile(threeJsState);
};

onMounted(() => {
  threeJsState.container = container;
  // 检测当前容器的宽高
  createScene(
    {
      containerHeight,
      containerWidth,
      containerElement: container.value
    },
    threeJsState
  );

});
</script>
<template>
  <UButton @click="connect">加入房间</UButton>
  <div ref="container" class="cb-maj-container"></div>
  <div>connection status:</div>
  <p>Status: {{ isConnected ? 'connected' : 'disconnected' }}</p>
  <p>Transport: {{ transport }}</p>
  <UButton @click="test">test</UButton>
</template>

<style>
.cb-maj-container {
  width: 100vw;
  aspect-ratio: 16 / 9;
  background-color: white;
}
</style>
<style src="./style/index.css"></style>
