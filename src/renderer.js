// note: Imports
// change: Specific imports
import * as THREE from "three";

// note: Renderer
export default function rendererFunction() {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    gammaOutput: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
}
