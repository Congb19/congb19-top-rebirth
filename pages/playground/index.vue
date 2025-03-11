<script setup>
import * as THREE from 'three';

const playgroundContainer = ref();

const containerWidth = 800;
const containerHeight = 450;

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    containerWidth / containerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(containerWidth, containerHeight);
  playgroundContainer.value.appendChild(renderer.domElement);

  // const geometry = new THREE.BoxGeometry(1, 1, 1);
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);

  const geometry = new THREE.PlaneGeometry(4,4);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
  });
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
});
</script>
<template>
  <div ref="playgroundContainer" class="cb-playground-container">啊</div>
</template>
<style>
.cb-playground-container {
  height: 450px;
  width: 800px;
  background-color: white;
}
</style>
