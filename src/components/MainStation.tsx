import React, { Suspense, useState, useEffect, useRef } from "react";
import TurbineArray from "./TurbineArray";
import Ship from "./Ship"
import './MainStation.css'
import { animated, useSpring } from "@react-spring/three";
import {useStore} from './Store'
import Terrain from './Terrain'
import * as THREE from "three";

export default function MainStation()
{

  const [wireMat] = useState(new THREE.MeshStandardMaterial({ color: 'black', metalness:0.5}))

return(

<>

<spotLight
      position={[0, 10, 0]}
      angle={1}
      penumbra={0.5}
      intensity={2}
      castShadow
      shadow-mapSize-width={1028}
      shadow-mapSize-height={1028}
      color="blue"
    />
 {/*10 Turbine Arrays */}

 <mesh position={[-24, 0, 0]}>
   <TurbineArray />
 </mesh>
 <mesh position={[-20, 0, 0]}>
   <TurbineArray />
 </mesh>
 <mesh position={[-16, 0, 0]}>
   <TurbineArray />
 </mesh>
 <mesh position={[-12, 0, 0]}>
   <TurbineArray />
 </mesh>
 <mesh position={[-8, 0, 0]}>
   <TurbineArray />
 </mesh>
<mesh position={[-4, 0, 0]}>
   <TurbineArray />
 </mesh>
 <mesh position={[0, 0, 0]}>
   <TurbineArray />
 </mesh>
 <mesh position={[4, 0, 0]}>
   <TurbineArray />
 </mesh>
 <mesh position={[8, 0, 0]}>
   <TurbineArray />
 </mesh>
 <mesh position={[12, 0, 0]}>
   <TurbineArray />
 </mesh>

 {/* ocean power cable */}
 <mesh 
 position={[-142, -9.5, 0]} 
 rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
 material={wireMat}>
 <cylinderBufferGeometry attach="geometry" args={[.08, .08, 500]}/>
 </mesh>

 <Ship />

</>)

}