import './style.css';
import * as THREE from 'three';
import meshes from './src/meshes';
import rendererFunction from './src/renderer';
import cam from './src/camera';
import models from './src/models';
import lights from './src/lights';
import raycasting from './src/raycaster';
import setCameraInteractable from './src/functions/setCameraInteractable';

// note: Define Variables
let activeInteractable;
let allowCameraMovement = true;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
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

// note: Mouse movement eventlistener
window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX - windowHalf.x;
  mouse.y = event.clientY - windowHalf.y;

  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

// note: Renderer
const renderer = rendererFunction();

// note: Window resizer eventlistener
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  windowHalf.set(width / 2, height / 2);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});

// note: Click eventlistener
window.addEventListener('click', () => {
  if (activeInteractable !== '') {
    allowCameraMovement = false;
    // remove console log
    console.log(`Clicked: ${activeInteractable.name}`);

    const interactableCameraPosition = new THREE.Vector3();

    const interactablePosition = new THREE.Vector3();
    interactablePosition.setFromMatrixPosition(activeInteractable.matrixWorld);

    switch (activeInteractable.name) {
      case 'Screen':
        interactableCameraPosition.setFromMatrixPosition(
          scene.children[4].children[9].matrixWorld
        );
        setCameraInteractable(
          camera,
          interactableCameraPosition,
          interactablePosition
        );
        break;
      case 'Screen001':
        interactableCameraPosition.setFromMatrixPosition(
          scene.children[4].children[17].matrixWorld
        );
        setCameraInteractable(
          camera,
          interactableCameraPosition,
          interactablePosition
        );
        break;
      case 'Screen002':
        interactableCameraPosition.setFromMatrixPosition(
          scene.children[4].children[13].matrixWorld
        );

        setCameraInteractable(
          camera,
          interactableCameraPosition,
          interactablePosition
        );
        break;
      default:
        console.log('An error occured');
        break;
    }
  }
});

window.addEventListener('keyup', (event) => {
  // remove: console.log
  console.log(event.key);
  console.log(scene.children[4].children);
  if (event.key === 'Escape') {
    camera.position.z = 0.5;
    camera.position.y = 0;
    camera.position.x = 0;
    camera.zoom = 1;
    allowCameraMovement = true;
  }
});

// note: Meshes
const cube = meshes.cubeMesh();
// remove console log
console.count(cube);
// scene.add(cube);

// note: Models
models.roomModel(scene, renderer, camera);

// note: Lights
lights.wallLight(scene);
lights.windowLight(scene);

// note: Animate function
function animate() {
  activeInteractable = raycasting.raycaster(
    raycaster,
    pointer,
    camera,
    scene,
    activeInteractable
  );
  // remove commented code
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  target.x = (1 - mouse.x) * 0.0004;
  target.y = (1 - mouse.y) * 0.0004;
  if (allowCameraMovement) {
    camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
    camera.rotation.y += 0.05 * (target.x - camera.rotation.y);
  }
}

// note: Call animate function
animate();
