<script setup>
const showDialog = ref(false);
const emit = defineEmits(['close']);

const show = () => (showDialog.value = true);
const close = () => {
  showDialog.value = false;
  emit('close');
};

defineExpose({
  show,
  close
});
</script>
<template>
  <div class="cb-dialog-wrapper">
    <div v-if="showDialog" class="cb-dialog">
      <div class="cb-dialog-close-btn">
        <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" @click="close" />
      </div>
    </div>
  </div>
</template>
<style>
.cb-dialog-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  pointer-events: none;
}
.cb-dialog {
  width: 800px;
  height: 600px;
  margin: auto 0;
  background: white;
  pointer-events: auto;

  .cb-dialog-close-btn {
    cursor: pointer;
    float: right;
  }
}
</style>
