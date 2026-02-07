import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Scene from "./Scene";
import { Environment } from "@react-three/drei";

function App() {
  return (
    <Canvas dpr={[1.5, 2]} camera={{ position: [0, 0, 3], fov: 70 }}>
      {/*<OrbitControls />*/}
      {/*<CameraControls
        makeDefault
        dollyToCursor
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />*/}

      <Environment preset="night" />
      <Scene />

      <EffectComposer>
        <Bloom
          intensity={1}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.8}
        />
      </EffectComposer>
    </Canvas>
  );
}

export default App;
