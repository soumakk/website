import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const scale = 5;
const lightCount = 10;
const radius = 1.5;

export default function Scene() {
  const { scene } = useGLTF("/model.glb");
  const torusRef = useRef(null);
  const [color, setColor] = useState(new THREE.Color("red"));

  const lights = [];

  for (let i = 0; i < lightCount; i++) {
    const angle = (i / lightCount) * Math.PI * 2;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    lights.push({ x, z, key: i });
  }

  useFrame((state, delta) => {
    torusRef.current.rotation.x += delta * 0.6;
    torusRef.current.rotation.y += delta * 0.6;
    torusRef.current.rotation.z = Math.PI / 4;

    const hsl: THREE.HSL = {};
    color.getHSL(hsl);
    const newHSL = (hsl.h + delta * 0.01) / 1;
    setColor(new THREE.Color().setHSL(newHSL, hsl.s, hsl.l));

    const { mouse, camera } = state;

    const targetX = mouse.x * 2;
    const targetY = mouse.y * 2;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);

    // Keep camera looking at center
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <primitive
        object={scene}
        scale={[scale, scale, scale]}
        position={[0, -0.3, 0]}
      />

      <group ref={torusRef}>
        {lights.map(({ x, z, key }) => (
          <>
            <pointLight
              key={key}
              position={[x, 0, z]}
              color={color}
              intensity={5}
              distance={radius * 2}
              decay={2}
            />
            {/*<mesh position={[x, 0, z]}>
              <sphereGeometry args={[0.1]} />
              <meshNormalMaterial />
            </mesh>*/}
          </>
        ))}

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.02, 30, 100]} />
          <meshStandardMaterial
            emissive={color}
            color="white"
            emissiveIntensity={5}
          />
        </mesh>
      </group>
    </>
  );
}
