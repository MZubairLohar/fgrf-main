// "use client";
// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import PumpModelTwo from './PumpModelTwo';
// import React, { Suspense } from "react";

// interface ModelCanvasProps {
//   onModelLoaded: () => void;
// }
// const ModelCanvas: React.FC<ModelCanvasProps> = ({ onModelLoaded }) => {
//   return (
//     <div className="absolute top-0 left-0 z-[-2] w-full h-full">
//       <Canvas>
//         <ambientLight intensity={6} />
//         <directionalLight position={[0, 20, 20]} intensity={20} />
//         {/* Auto rotation <OrbitControls autoRotate /> */}
//         <OrbitControls />
//         <Suspense >
//           {/* <PumpModel /> */}
//           <PumpModelTwo onModelLoaded={onModelLoaded} />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default ModelCanvas;
