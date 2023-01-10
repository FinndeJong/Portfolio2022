// note: Imports
import * as THREE from "three";

// note: All meshes
function cubeMesh() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x3c00ff });
  material.wireframe = true;
  const cube = new THREE.Mesh(geometry, material);
  return cube;
}

function sphereMesh() {
  const geometry = new THREE.SphereGeometry(2, 32, 16);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  material.wireframe = true;
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.z = -4;
  return sphere;
}

// note: Exportable object
const meshes = {
  cubeMesh,
  sphereMesh,
};

// note: Export
export default meshes;
