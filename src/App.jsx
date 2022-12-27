import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <sphereBufferGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
        <mesh position={[1, 0, 0]}>
          <boxBufferGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
