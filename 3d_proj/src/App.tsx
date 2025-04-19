import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function DonutModel() {
  const { scene } = useGLTF(import.meta.env.BASE_URL + 'GROUND_FLOOR_LAYOUT.glb');
  return <primitive object={scene} scale={1} />
}

export default function DonutViewer() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 30 }} style={{ width: '100%', height: '100vh' }}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <DonutModel />
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}