import React, { Suspense, useState, useEffect, useRef, useLayoutEffect } from "react";
import TurbineArray from "./TurbineArray";
import Ship from "./Ship"
import { animated, useSpring } from "@react-spring/three";
import {useStore} from './Store'
import Turbine from './Turbine'
import * as THREE from "three";
import { Matrix4, useLoader } from "react-three-fiber";

export default function SingleStation()
{
const ref= useRef()
  const [wireMat] = useState(new THREE.MeshStandardMaterial({ color: 'black', metalness:0.5}))
  const color = useLoader(THREE.TextureLoader, "/Original.png");
 
  const [buoyMat] = useState(new THREE.MeshStandardMaterial({ color: 'white', metalness:0.5, map:color}))
  const m = useState(() => new THREE.Matrix4().makeScale( 1.0, 1.2, 1.5 ))
  const sphere= useState(() => new THREE.SphereBufferGeometry(2, 16, 12))
  useLayoutEffect(() => {
   ref.current.applyMatrix4(m)
  }, [m])

  return(
<group>
 <hemisphereLight
   intensity={2.5}
  // color={"rgb(92, 173, 228)"}
   position={[7, 5, 1]}
 /> {/*<mesh scale={[2,2,2]} position={[0, 0, 0]}>
  <animated.mesh position={[0, -18, 0]} material={wireMat}>
        <cylinderBufferGeometry attach="geometry" args={[.03, .03, 50]}/>
     
        
      <animated.mesh position={[0, 18, -0.4]} scale={[2,2,2]}>
        <Turbine/>
      </animated.mesh>
  </animated.mesh>
 </mesh>
</> */}
    <mesh ref={ref} >
      <sphereBufferGeometry attach="geometry" args={[2, 16, 12]} />
    </mesh>
        
  </group>

)

}