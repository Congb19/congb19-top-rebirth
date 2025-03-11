<script setup>
import createScene from './core/createScene';
import renderTable from './core/renderTable';

const container = ref();
const containerWidth = 800;
const containerHeight = 450;

onMounted(() => {
  const { scene, camera, renderer } = createScene({
    containerHeight,
    containerWidth,
    containerElement: container.value
  });
  renderTable({ scene });

  // go
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
});
</script>
<template>
  <div ref="container" class="cb-maj-container"></div>
</template>

<style>
.cb-maj-container {
  height: 450px;
  width: 800px;
  background-color: white;
}
</style>
