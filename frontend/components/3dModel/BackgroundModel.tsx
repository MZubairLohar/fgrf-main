"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { BackroundDetail } from "./BackgroundDetail";

const BackgroundModel = () => {
  return (
    <div className="fixed top-0 left-0 z-[-1] w-full h-screen">
      <Canvas>
        <ambientLight intensity={7} />
        <directionalLight position={[0, 20, 0]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <Suspense>
          <BackroundDetail />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BackgroundModel;
