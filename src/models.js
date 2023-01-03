// note: Imports
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// note: Models
function roomModel(scene, renderer, camera) {
  const loader = new GLTFLoader();
  loader.load("./assets/models/RoomV15.glb", (gltf) => {
    gltf.scene.position.set(5, 0, 2);
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });
}
// note: Exportable object
const models = {
  roomModel,
};

// note: Export
export default models;
