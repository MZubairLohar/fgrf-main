"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { GreenHouseModel } from "./greenHouseModel";

const BackgroundCanvas = () => {
  return (
    <div className="fixed top-0 left-0 z-[-2] w-full h-full">
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[30, 20, 30]} intensity={60} />
        <OrbitControls autoRotate />
        <Suspense>
          <GreenHouseModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BackgroundCanvas;
