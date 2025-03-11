
import * as THREE from 'three';

export default ({ scene }) => {
  const geometry = new THREE.PlaneGeometry(4, 4);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide
  });
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);
}
