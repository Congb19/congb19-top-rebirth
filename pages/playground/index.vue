<script setup>
const message = ref('');
const response = ref('');
const isLoading = ref(false);

async function sendMessage() {
  try {
    isLoading.value = true;
    const { data } = await useFetch('/api/chat', {
      method: 'POST',
      body: {
        message: message.value
      }
    });

    if (data.value?.success) {
      response.value = data.value.response;
    }
  } catch (error) {
    console.error('Error:', error);
    alert(error.data?.message || '请求失败');
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div>
    <textarea v-model="message"></textarea>
    <button @click="sendMessage" :disabled="isLoading">
      {{ isLoading ? '发送中...' : '发送' }}
    </button>
    <div v-if="response">
      <h3>AI 回复：</h3>
      <p>{{ response }}</p>
    </div>
  </div>
</template>
