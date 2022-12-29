import "./style.css";
import * as THREE from "three";
import meshes from "./src/meshes";
import rendererFunction from "./src/renderer";
import cam from "./src/camera";

// note: Scene
const scene = new THREE.Scene();

// note: Camera
const camera = cam();

// note: Renderer
const renderer = rendererFunction();

// note: Window resizer
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

// note: meshes
const cube = meshes.cubeMesh();
const sphere = meshes.sphereMesh();
scene.add(cube, sphere);

// note: Animate function
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

// note: Call animate function
animate();

// note: L bozo
