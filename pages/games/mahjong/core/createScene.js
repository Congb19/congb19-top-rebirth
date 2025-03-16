
import * as THREE from 'three';
import TWEEN from 'three/addons/libs/tween.module.js';

import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

export default (options, state) => {
  // 创建scene，相机，renderer。
  const { containerHeight, containerWidth, containerElement } = options
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    90,
    16 / 9,
    0.1,
    1000
  );
  let renderer = new CSS3DRenderer();
  renderer.setSize(state.container.innerWidth, state.container.innerHeight);
  camera.lookAt(0, 0, 0);
  camera.position.set(0, 0, 100);
  containerElement.appendChild(renderer.domElement);

  state.scene = scene;
  state.camera = camera;
  state.renderer = renderer;
  state.container = containerElement;

  // 处理resize
  const onContainerResize = (width, height) => {
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  const resize = () => {
    const [height, width] = [
      containerElement.offsetHeight,
      containerElement.offsetWidth
    ];
    const minUnit = Math.min(height / 9, width / 16);
    console.log(minUnit);
    onContainerResize(minUnit * 16, minUnit * 9);
  };
  resize();
  // resize
  window.addEventListener('resize', resize);

  // go

  // go
  function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    renderer.render(scene, camera);
  }

  animate();
  return {
    animate
  }
}