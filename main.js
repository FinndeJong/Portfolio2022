import "./style.css";
import * as THREE from "three";
import meshes from "./src/meshes";
import rendererFunction from "./src/renderer";
import cam from "./src/camera";
import models from "./src/models";
import lights from "./src/lights";

// note: Define Variables
const mouse = new THREE.Vector2();
const target = new THREE.Vector2();
const windowHalf = new THREE.Vector2(
  window.innerWidth / 2,
  window.innerHeight / 2
);
// note: Scene
const scene = new THREE.Scene();

// note: Camera
const camera = cam();
window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX - windowHalf.x;
  mouse.y = event.clientY - windowHalf.y;
});

// note: Renderer
const renderer = rendererFunction();

// note: Window resizer
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  windowHalf.set(width / 2, height / 2);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});

// note: Meshes
const cube = meshes.cubeMesh();
// scene.add(cube);

// note: Models
models.roomModel(scene, renderer, camera);

// note: Lights
lights.wallLight(scene);
lights.windowLight(scene);

// note: Animate function
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  // cube.rotation.z += 0.01;

  target.x = (1 - mouse.x) * 0.0004;
  target.y = (1 - mouse.y) * 0.0004;

  camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
  camera.rotation.y += 0.05 * (target.x - camera.rotation.y);
}

// note: Call animate function
animate();
