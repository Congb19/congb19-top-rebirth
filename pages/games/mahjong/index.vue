<script setup>
import createScene from './core/createScene';
import connectServer from './core/connectServer';

import renderTable from './render/renderTable';
import renderMajTile from './render/renderMajTile';

const container = ref();
const containerWidth = 800;
const containerHeight = 450;

// state
const threeJsState = reactive({
  scene: null,
  camera: null,
  container: null,
  renderer: null
});
const connectionState = reactive({
  userId: null,
  roomId: null,
  isConnected: false,
  inRoom: false,
  transport: '',
  socket: null
});

// connection
const isConnected = ref(false);
const transport = ref('');
const connect = () => {
  const connection = connectServer();
  connectionState.isConnected = connection.isConnected;
  connectionState.transport = connection.transport;
  connectionState.socket = connection.socket;
};
const joinRoom = () => {
  const message = {
    userId: connectionState.userId,
    roomId: connectionState.roomId
  };
  console.log('joinRoom', message);
  connectionState.socket.emit('joinRoom', message);
}
const exitRoom = () => {
  const message = {
    userId: connectionState.userId,
    roomId: connectionState.roomId
  };
  console.log('exitRoom', message);
  connectionState.socket.emit('exitRoom', message);
}
const sendMessageTest = () => {
  const message = {
    userId: 'test1'
  };
  console.log('sendMessageTest', message, connectionState.socket);
  connectionState.socket.emit('sendMessageTest', message);
};

const renderTest = () => {
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
  <div ref="container" class="cb-maj-container"></div>
  <UButton @click="renderTest">renderTest</UButton>
  <div>connection status:</div>
  <p>Status: {{ connectionState.isConnected ? 'connected' : 'disconnected' }}</p>
  <p>Transport: {{ connectionState.transport }}</p>
  {{ connectionState.socket?.id }}
  <UCard title="连接服务器" class="cb-login-card">
    <UInput v-model="connectionState.userId" :disabled="connectionState.inRoom"></UInput>
    <UInput v-model="connectionState.roomId" :disabled="connectionState.inRoom"></UInput>
    <UButton @click="connect">连接服务器</UButton>
    <UButton @click="joinRoom">加入房间</UButton>
    <UButton @click="exitRoom">离开房间</UButton>
    <UButton @click="sendMessageTest">sendMessageTest</UButton>
  </UCard>
</template>

<style>
.cb-maj-container {
  width: 100vw;
  aspect-ratio: 16 / 9;
  background-color: white;
}
.cb-login-card {
  width: 400px;

}
</style>
<style src="./style/index.css"></style>
