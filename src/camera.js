import * as THREE from "three";

export default function cam() {
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    30
  );
  camera.position.z = 10;
  return camera;
}
