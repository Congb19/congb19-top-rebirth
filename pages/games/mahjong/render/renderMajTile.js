
import * as THREE from 'three';
import TWEEN from 'three/addons/libs/tween.module.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

export default (state, options) => {
  const { scene, camera, container, renderer } = state

  const majTileElement = document.createElement('div');
  majTileElement.className = 'cb-maj-tile';
  const objectCSS = new CSS3DObject(majTileElement);
  objectCSS.position.x = 20;
  objectCSS.position.y = 0;
  objectCSS.position.z = 1;
  scene.add(objectCSS);

  const object = new THREE.Object3D();
  object.position.x = 0
  object.position.y = 0

}
