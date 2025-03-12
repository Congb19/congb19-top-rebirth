
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
  camera.position.set( 0, -50, 90 );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(containerWidth, containerHeight);
  containerElement.appendChild(renderer.domElement);
  camera.lookAt( 0, -9, 0 );
  return {
    scene,
    camera,
    renderer
  }
}