export default function setCameraInteractable(
  camera,
  interactableCameraPosition,
  interactablePosition
) {
  camera.position.set(
    interactableCameraPosition.x,
    interactableCameraPosition.y,
    interactableCameraPosition.z
  );
  camera.lookAt(interactablePosition);
}
