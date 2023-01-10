import * as THREE from "three";

function ambientLight() {
  const light = new THREE.AmbientLight(0xffffff);
  return light;
}

const lights = {
  ambientLight,
};

export default lights;
