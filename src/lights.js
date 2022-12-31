// note: Imports
import * as THREE from "three";

// note: Lights
function wallLight(scene) {
  const pointLight = new THREE.PointLight(0xffd7b5, 5, 100);
  pointLight.position.set(0, 10, 0);
  scene.add(pointLight);

  // note: Light helper
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
  scene.add(pointLightHelper);
}

// note: Export object
const lights = {
  wallLight,
};

// note: Export
export default lights;
