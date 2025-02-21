"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function BackroundDetail(props: any) {
  const group = useRef();
  const { nodes, materials, animations }: any = useGLTF(
    "./bgModel/the_orrery.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animationAction = actions["./bgModel/the_orrery.glb"]; // Replace with your animation name
    animationAction && animationAction.play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.004}
        >
          <group
            name="eb3c6447547e4f849afa9154db735be2fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="MercuryG" rotation={[-Math.PI, 0.053, -Math.PI]}>
                  <group name="group2">
                    <group name="pCylinder13">
                      <mesh
                        name="pCylinder13_Parts01_mt_0"
                        geometry={nodes.pCylinder13_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder14">
                      <mesh
                        name="pCylinder14_Parts01_mt_0"
                        geometry={nodes.pCylinder14_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder15">
                      <mesh
                        name="pCylinder15_Parts01_mt_0"
                        geometry={nodes.pCylinder15_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder18">
                      <mesh
                        name="pCylinder18_Parts01_mt_0"
                        geometry={nodes.pCylinder18_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                  </group>
                  <group name="pTorus1">
                    <mesh
                      name="pTorus1_Parts02_mt_0"
                      geometry={nodes.pTorus1_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group name="pCylinder45">
                    <mesh
                      name="pCylinder45_Parts01_mt_0"
                      geometry={nodes.pCylinder45_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pCylinder36">
                    <mesh
                      name="pCylinder36_Parts01_mt_0"
                      geometry={nodes.pCylinder36_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="Mercury" position={[37, 285, 0]}>
                    <mesh
                      name="Mercury_Mercury_mt_0"
                      geometry={nodes.Mercury_Mercury_mt_0.geometry}
                      material={materials.Mercury_mt}
                    />
                  </group>
                </group>
                <group name="VenusG" rotation={[0, 0.957, 0]}>
                  <group name="group3">
                    <group name="pCylinder17">
                      <mesh
                        name="pCylinder17_Parts01_mt_0"
                        geometry={nodes.pCylinder17_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder15_1">
                      <mesh
                        name="pCylinder15_Parts01_mt_0_1"
                        geometry={nodes.pCylinder15_Parts01_mt_0_1.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder13_1">
                      <mesh
                        name="pCylinder13_Parts01_mt_0_1"
                        geometry={nodes.pCylinder13_Parts01_mt_0_1.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder14_1">
                      <mesh
                        name="pCylinder14_Parts01_mt_0_1"
                        geometry={nodes.pCylinder14_Parts01_mt_0_1.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                  </group>
                  <group name="pCylinder35">
                    <mesh
                      name="pCylinder35_Parts01_mt_0"
                      geometry={nodes.pCylinder35_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pTorus2">
                    <mesh
                      name="pTorus2_Parts02_mt_0"
                      geometry={nodes.pTorus2_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group name="pCylinder44">
                    <mesh
                      name="pCylinder44_Parts01_mt_0"
                      geometry={nodes.pCylinder44_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group
                    name="Venus"
                    position={[0, 0.316, 13.425]}
                    rotation={[-0.047, 0, 0]}
                  >
                    <mesh
                      name="Venus_Venus_mt_0"
                      geometry={nodes.Venus_Venus_mt_0.geometry}
                      material={materials.Venus_mt}
                    />
                  </group>
                </group>
                <group name="EarthG" rotation={[-Math.PI, 0.646, -Math.PI]}>
                  <group name="group4">
                    <group name="pCylinder14_2">
                      <mesh
                        name="pCylinder14_Parts01_mt_0_2"
                        geometry={nodes.pCylinder14_Parts01_mt_0_2.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder13_2">
                      <mesh
                        name="pCylinder13_Parts01_mt_0_2"
                        geometry={nodes.pCylinder13_Parts01_mt_0_2.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder15_2">
                      <mesh
                        name="pCylinder15_Parts01_mt_0_2"
                        geometry={nodes.pCylinder15_Parts01_mt_0_2.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder16">
                      <mesh
                        name="pCylinder16_Parts01_mt_0"
                        geometry={nodes.pCylinder16_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                  </group>
                  <group name="pTorus3">
                    <mesh
                      name="pTorus3_Parts02_mt_0"
                      geometry={nodes.pTorus3_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group name="pCylinder43">
                    <mesh
                      name="pCylinder43_Parts01_mt_0"
                      geometry={nodes.pCylinder43_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pCylinder34">
                    <mesh
                      name="pCylinder34_Parts01_mt_0"
                      geometry={nodes.pCylinder34_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group
                    name="Earth"
                    position={[123.158, 36.546, -143.473]}
                    rotation={[-2.733, -Math.PI / 6, -Math.PI]}
                  >
                    <mesh
                      name="Earth_Earth_mt_0"
                      geometry={nodes.Earth_Earth_mt_0.geometry}
                      material={materials.Earth_mt}
                    />
                  </group>
                </group>
                <group name="MarsG" rotation={[-Math.PI, -0.352, -Math.PI]}>
                  <group name="group5">
                    <group name="pCylinder19">
                      <mesh
                        name="pCylinder19_Parts01_mt_0"
                        geometry={nodes.pCylinder19_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder13_3">
                      <mesh
                        name="pCylinder13_Parts01_mt_0_3"
                        geometry={nodes.pCylinder13_Parts01_mt_0_3.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder14_3">
                      <mesh
                        name="pCylinder14_Parts01_mt_0_3"
                        geometry={nodes.pCylinder14_Parts01_mt_0_3.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder15_3">
                      <mesh
                        name="pCylinder15_Parts01_mt_0_3"
                        geometry={nodes.pCylinder15_Parts01_mt_0_3.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                  </group>
                  <group name="pCylinder33">
                    <mesh
                      name="pCylinder33_Parts01_mt_0"
                      geometry={nodes.pCylinder33_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pTorus4">
                    <mesh
                      name="pTorus4_Parts02_mt_0"
                      geometry={nodes.pTorus4_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group name="pCylinder42">
                    <mesh
                      name="pCylinder42_Parts01_mt_0"
                      geometry={nodes.pCylinder42_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group
                    name="Mars"
                    position={[0, 27.124, -121.347]}
                    rotation={[0.44, 0, 0]}
                  >
                    <mesh
                      name="Mars_Msrs_mt_0"
                      geometry={nodes.Mars_Msrs_mt_0.geometry}
                      material={materials.Msrs_mt}
                    />
                  </group>
                </group>
                <group name="JupiterG" rotation={[-Math.PI, 0.059, -Math.PI]}>
                  <group name="group6">
                    <group name="pCylinder14_4">
                      <mesh
                        name="pCylinder14_Parts01_mt_0_4"
                        geometry={nodes.pCylinder14_Parts01_mt_0_4.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder15_4">
                      <mesh
                        name="pCylinder15_Parts01_mt_0_4"
                        geometry={nodes.pCylinder15_Parts01_mt_0_4.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder20">
                      <mesh
                        name="pCylinder20_Parts01_mt_0"
                        geometry={nodes.pCylinder20_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder13_4">
                      <mesh
                        name="pCylinder13_Parts01_mt_0_4"
                        geometry={nodes.pCylinder13_Parts01_mt_0_4.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                  </group>
                  <group name="pCylinder41">
                    <mesh
                      name="pCylinder41_Parts01_mt_0"
                      geometry={nodes.pCylinder41_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pCylinder32">
                    <mesh
                      name="pCylinder32_Parts01_mt_0"
                      geometry={nodes.pCylinder32_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pTorus5">
                    <mesh
                      name="pTorus5_Parts02_mt_0"
                      geometry={nodes.pTorus5_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group
                    name="Jupiter"
                    position={[0, 0.417, -15.412]}
                    rotation={[0.054, 0, 0]}
                  >
                    <mesh
                      name="Jupiter_Jupiter_mt_0"
                      geometry={nodes.Jupiter_Jupiter_mt_0.geometry}
                      material={materials.Jupiter_mt}
                    />
                  </group>
                </group>
                <group name="SaturnG" rotation={[0, -0.347, 0]}>
                  <group name="group7">
                    <group name="pCylinder21">
                      <mesh
                        name="pCylinder21_Parts01_mt_0"
                        geometry={nodes.pCylinder21_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder15_5">
                      <mesh
                        name="pCylinder15_Parts01_mt_0_5"
                        geometry={nodes.pCylinder15_Parts01_mt_0_5.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder14_5">
                      <mesh
                        name="pCylinder14_Parts01_mt_0_5"
                        geometry={nodes.pCylinder14_Parts01_mt_0_5.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder13_5">
                      <mesh
                        name="pCylinder13_Parts01_mt_0_5"
                        geometry={nodes.pCylinder13_Parts01_mt_0_5.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                  </group>
                  <group name="Saturn">
                    <group name="pCylinder2">
                      <mesh
                        name="pCylinder2_Saturnring_mt_0"
                        geometry={nodes.pCylinder2_Saturnring_mt_0.geometry}
                        material={materials.Saturnring_mt}
                      />
                    </group>
                    <group
                      name="pSphere6"
                      position={[0, 30.389, -128.056]}
                      rotation={[0.466, 0, 0]}
                    >
                      <mesh
                        name="pSphere6_Saturn_mt_0"
                        geometry={nodes.pSphere6_Saturn_mt_0.geometry}
                        material={materials.Saturn_mt}
                      />
                    </group>
                  </group>
                  <group name="pCylinder31">
                    <mesh
                      name="pCylinder31_Parts01_mt_0"
                      geometry={nodes.pCylinder31_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pCylinder40">
                    <mesh
                      name="pCylinder40_Parts01_mt_0"
                      geometry={nodes.pCylinder40_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pTorus6">
                    <mesh
                      name="pTorus6_Parts02_mt_0"
                      geometry={nodes.pTorus6_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                </group>
                <group name="UranusG" rotation={[-Math.PI, 1.092, -Math.PI]}>
                  <group name="group8">
                    <group name="pCylinder13_6">
                      <mesh
                        name="pCylinder13_Parts01_mt_0_6"
                        geometry={nodes.pCylinder13_Parts01_mt_0_6.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder14_6">
                      <mesh
                        name="pCylinder14_Parts01_mt_0_6"
                        geometry={nodes.pCylinder14_Parts01_mt_0_6.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder15_6">
                      <mesh
                        name="pCylinder15_Parts01_mt_0_6"
                        geometry={nodes.pCylinder15_Parts01_mt_0_6.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder22">
                      <mesh
                        name="pCylinder22_Parts01_mt_0"
                        geometry={nodes.pCylinder22_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                  </group>
                  <group name="pTorus7">
                    <mesh
                      name="pTorus7_Parts02_mt_0"
                      geometry={nodes.pTorus7_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group name="pCylinder30">
                    <mesh
                      name="pCylinder30_Parts01_mt_0"
                      geometry={nodes.pCylinder30_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pCylinder39">
                    <mesh
                      name="pCylinder39_Parts01_mt_0"
                      geometry={nodes.pCylinder39_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group
                    name="Uranus"
                    position={[0, 323.679, -282.363]}
                    rotation={[1.707, 0, 0]}
                  >
                    <mesh
                      name="Uranus_Uranus_mt_0"
                      geometry={nodes.Uranus_Uranus_mt_0.geometry}
                      material={materials.Uranus_mt}
                    />
                  </group>
                </group>
                <group name="NeptuneG" rotation={[0, 1.043, 0]}>
                  <group name="group9">
                    <group name="pCylinder13_7">
                      <mesh
                        name="pCylinder13_Parts01_mt_0_7"
                        geometry={nodes.pCylinder13_Parts01_mt_0_7.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder23">
                      <mesh
                        name="pCylinder23_Parts01_mt_0"
                        geometry={nodes.pCylinder23_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder15_7">
                      <mesh
                        name="pCylinder15_Parts01_mt_0_7"
                        geometry={nodes.pCylinder15_Parts01_mt_0_7.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder14_7">
                      <mesh
                        name="pCylinder14_Parts01_mt_0_7"
                        geometry={nodes.pCylinder14_Parts01_mt_0_7.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                  </group>
                  <group name="pCylinder37">
                    <mesh
                      name="pCylinder37_Parts01_mt_0"
                      geometry={nodes.pCylinder37_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pTorus8">
                    <mesh
                      name="pTorus8_Parts02_mt_0"
                      geometry={nodes.pTorus8_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group name="pCylinder29">
                    <mesh
                      name="pCylinder29_Parts01_mt_0"
                      geometry={nodes.pCylinder29_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group
                    name="Neptune"
                    position={[0, 34.064, -135.115]}
                    rotation={[0.494, 0, 0]}
                  >
                    <mesh
                      name="Neptune_Neptunu_mt_0"
                      geometry={nodes.Neptune_Neptunu_mt_0.geometry}
                      material={materials.Neptunu_mt}
                    />
                  </group>
                </group>
                <group name="PlutoG" rotation={[0, 0.694, 0]}>
                  <group name="group10">
                    <group name="pCylinder13_8">
                      <mesh
                        name="pCylinder13_Parts01_mt_0_8"
                        geometry={nodes.pCylinder13_Parts01_mt_0_8.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder14_8">
                      <mesh
                        name="pCylinder14_Parts01_mt_0_8"
                        geometry={nodes.pCylinder14_Parts01_mt_0_8.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder24">
                      <mesh
                        name="pCylinder24_Parts01_mt_0"
                        geometry={nodes.pCylinder24_Parts01_mt_0.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                    <group name="pCylinder15_8">
                      <mesh
                        name="pCylinder15_Parts01_mt_0_8"
                        geometry={nodes.pCylinder15_Parts01_mt_0_8.geometry}
                        material={materials.Parts01_mt}
                      />
                    </group>
                  </group>
                  <group name="pCylinder38">
                    <mesh
                      name="pCylinder38_Parts01_mt_0"
                      geometry={nodes.pCylinder38_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pCylinder28">
                    <mesh
                      name="pCylinder28_Parts01_mt_0"
                      geometry={nodes.pCylinder28_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pTorus9">
                    <mesh
                      name="pTorus9_Parts02_mt_0"
                      geometry={nodes.pTorus9_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group
                    name="Pluto"
                    position={[0, 12.453, -83.326]}
                    rotation={[0.297, 0, 0]}
                  >
                    <mesh
                      name="Pluto_Pluto_mt_0"
                      geometry={nodes.Pluto_Pluto_mt_0.geometry}
                      material={materials.Pluto_mt}
                    />
                  </group>
                </group>
                <group name="Stand">
                  <group name="pCylinder27">
                    <mesh
                      name="pCylinder27_Parts02_mt_0"
                      geometry={nodes.pCylinder27_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                    <mesh
                      name="pCylinder27_Parts01_mt_0"
                      geometry={nodes.pCylinder27_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="pCylinder25" scale={[1, 1, 0.8]}>
                    <mesh
                      name="pCylinder25_Parts02_mt_0"
                      geometry={nodes.pCylinder25_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group name="pCylinder26">
                    <mesh
                      name="pCylinder26_Parts02_mt_0"
                      geometry={nodes.pCylinder26_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group
                    name="pCylinder47"
                    position={[0, 285, 0]}
                    rotation={[-0.588, -0.448, -0.281]}
                    scale={0.988}
                  >
                    <mesh
                      name="pCylinder47_Parts02_mt_0"
                      geometry={nodes.pCylinder47_Parts02_mt_0.geometry}
                      material={materials.Parts02_mt}
                    />
                  </group>
                  <group
                    name="pCylinder46"
                    position={[0, -81.956, 0]}
                    scale={5.8}
                  >
                    <mesh
                      name="pCylinder46_Parts01_mt_0"
                      geometry={nodes.pCylinder46_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                  <group name="Sun">
                    <mesh
                      name="Sun_Parts01_mt_0"
                      geometry={nodes.Sun_Parts01_mt_0.geometry}
                      material={materials.Parts01_mt}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./bgModel/the_orrery.glb");
