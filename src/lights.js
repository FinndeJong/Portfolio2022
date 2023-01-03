// note: Imports
import * as THREE from "three";

// note: Lights
// change: Pointlight -> Spotlight
function wallLight(scene) {
  const pointLight = new THREE.PointLight(0xffffff, 5, 100);
  pointLight.position.set(5, 10, 0);
  scene.add(pointLight);

  // note: Light helper
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
  scene.add(pointLightHelper);
}

function windowLight(scene) {
  const pointLight = new THREE.PointLight(0xffffff, 5, 100);
  pointLight.position.set(30, 5, 0);
  scene.add(pointLight);

  // note: Light helper
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
  scene.add(pointLightHelper);
}

// note: Export object
const lights = {
  wallLight,
  windowLight,
};

// note: Export
export default lights;
