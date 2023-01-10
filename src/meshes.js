// note: Imports
import * as THREE from "three";

// note: All meshes
function cubeMesh() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x3c00ff });
  const cube = new THREE.Mesh(geometry, material);
  return cube;
}

function sphereMesh() {
  const geometry = new THREE.SphereGeometry(1, 32, 16);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.x = 2;
  return sphere;
}

// note: Exportable object
const meshes = {
  cubeMesh,
  sphereMesh,
};

// note: Export
export default meshes;
