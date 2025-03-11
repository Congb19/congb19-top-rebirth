
import * as THREE from 'three';

export default (options) => {
  const { containerHeight, containerWidth, containerElement } = options
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    containerWidth / containerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(containerWidth, containerHeight);
  containerElement.appendChild(renderer.domElement);
  return {
    scene,
    camera,
    renderer
  }
}