// "use client";
// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sphere } from "@react-three/drei";
// import { pointsInner, pointsOuter } from "./utils/utils";
// import { log } from "three/examples/jsm/nodes/Nodes.js";

// interface Point {
//   idx: number;
//   position: [number, number, number];
//   color: string;
// }

// const ThreadsParticles: React.FC = () => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-screen z-[-2]">
//       <Canvas
//         camera={{
//           position: [0, -20, 8],
//         }}
//       >
//         <directionalLight />
//         <pointLight position={[-30, 0, -30]} power={10.0} />
//         <PointCircle />
//       </Canvas>
//     </div>
//   );
// };

// const PointCircle: React.FC = () => {
//   const ref = useRef<any>(null);

//   useFrame(({ clock }) => {
//     if (ref.current?.rotation) {
//       ref.current.rotation.z = clock.getElapsedTime() * 0.05;
//     }


//   });

//   return (
//     <group ref={ref}>
//       {pointsInner.map((point: Point) => (
//         <Point key={point.idx} position={point.position} color={point.color} />
//       ))}
//       {/* {pointsOuter.map((point: Point) => (
//         <Point key={point.idx} position={point.position} color={point.color} />
//       ))} */}
//     </group>
//   );
// };

// interface PointProps {
//   position: [number, number, number];
//   color: string;
// }

// const Point: React.FC<PointProps> = ({ position, color }) => {
//   return (
//     <Sphere position={position} args={[0.11, 10, 10]}>
//       <meshStandardMaterial
//         emissive={color}
//         emissiveIntensity={0.9}
//         roughness={3.5}
//         color={color}
//       />
//     </Sphere>
//   );
// };

// export default ThreadsParticles;
