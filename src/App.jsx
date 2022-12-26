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
      </Canvas>
    </div>
  );
}

export default App;
