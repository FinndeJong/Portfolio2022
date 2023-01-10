import "./style.css";
import * as THREE from "three";
import meshes from "./src/meshes";
import rendererFunction from "./src/renderer";
import cam from "./src/camera";
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
scene.background = new THREE.Color(0xdba15e);

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

// note: meshes
const sphere = meshes.sphereMesh();
scene.add(sphere);

// note: lights
const ambientLight = lights.ambientLight(scene);
scene.add(ambientLight);

// note: Animate function
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  // 0.0005 is how far the camera can move
  target.x = (1 - mouse.x) * 0.0005;
  target.y = (1 - mouse.y) * 0.0005;

  // 0.05 is the speed at which the camera moves
  camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
  camera.rotation.y += 0.05 * (target.x - camera.rotation.y);
}

// note: Call animate function
animate();

// note: L bozo
