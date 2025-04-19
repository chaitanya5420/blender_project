import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

function DonutModel() {
  const obj = useLoader(OBJLoader, 'GROUND_FLOOR_LAYOUT.glb');

  return <primitive object={obj} scale={1} />;
}// import.meta.env.BASE_URL + 
// function DonutModel() {
//   const loader = new OBJLoader();
//   loader.load(
//     '3d_proj/public/campus.obj',
//     function (object) {
//       scene.add(object);
//     },
//     function (xhr) {
//       console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//     },
//     function (error) {
//       console.error('An error happened', error);
//     }
//   );
  
//   const { scene } = useGLTF('campus.obj');
//   return <primitive object={scene} scale={1} />
// }

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