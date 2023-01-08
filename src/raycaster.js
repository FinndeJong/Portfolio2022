// note: Raycaster
function raycaster(raycast, pointer, camera, scene) {
  raycast.setFromCamera(pointer, camera);
  const intersects = raycast.intersectObjects(scene.children);
  const tempClickable = ["Screen", "Screen001", "Screen002"];

  if (intersects.length > 0) {
    if (tempClickable.includes(intersects[0].object.name)) {
      const firstIntersect = intersects[0].object;
      return firstIntersect;
    }
  }
  return "";
}

// note: Export object
const raycasting = {
  raycaster,
};

// note: Export
export default raycasting;
