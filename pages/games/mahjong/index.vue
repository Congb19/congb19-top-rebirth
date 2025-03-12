<script setup>
import createScene from './core/createScene';
import renderTable from './render/renderTable';
import TWEEN from 'three/addons/libs/tween.module.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import {
  CSS3DRenderer,
  CSS3DObject
} from 'three/addons/renderers/CSS3DRenderer.js';

import startGame from './core/startGame';

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
  startGame()
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
