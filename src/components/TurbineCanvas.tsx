import React , { Suspense, useRef, useState, useEffect} from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import './home.css'
import * as THREE from 'three'
import TurbineScene from './TurbineScene'
import Overlay from './Overlay'
import {Plane, OrbitControls} from "drei"


const Terrain:any = () =>{
  const elevation = useLoader(THREE.TextureLoader, "terrain.png")
  const normal = useLoader(THREE.TextureLoader, "terrainspec.png")
  const color = useLoader(THREE.TextureLoader, "oceanfloor.png")
  return(
  <Plane
    rotation={[-Math.PI / 2, 0 ,0]}
    position={[0, -10, 0]}
    args={[256, 256, 1024, 1024]}
  >
      <meshStandardMaterial attach="material" color="white" 
        displacementMap={elevation}
        normalMap={normal}
        map={color}
      />
  </Plane>
  )
}

 function TurbineCanvas(){
   return( 
   <>
    <Canvas camera={{position:[15,5,7]}}>
      <Overlay/> 
      <fog attach="fog"  args={["rgb(1,17,64)", 0, 75]} />
      <OrbitControls autoRotate/>
      <Suspense fallback={null}>
      <Terrain />
      <ambientLight intensity={2} color={"rgb(1,17,64)"} position={[7,5,1]}/>
      <mesh position={[0, 0, 0]}>
        <TurbineScene/>
      </mesh>
      <mesh position={[-4, 0, 0]}>
        <TurbineScene/>
      </mesh>
      <mesh position={[-8, 0, 0]}>
        <TurbineScene/>
      </mesh>
      <mesh position={[-12, 0, 0]}>
        <TurbineScene/>
      </mesh>
      <mesh position={[4, 0, 0]}>
        <TurbineScene/>
      </mesh>
      <mesh position={[8, 0, 0]}>
        <TurbineScene/>
      </mesh>
      <mesh position={[12, 0, 0]}>
        <TurbineScene/>
      </mesh>
      <mesh position={[16, 0, 0]}>
        <TurbineScene/>
      </mesh>
      <mesh position={[18, 0, 0]}>
        <TurbineScene/>
      </mesh>
      <mesh position={[21, 0, 0]}>
        <TurbineScene/>
      </mesh>
      <mesh position={[12, 0, 0]}>
        <TurbineScene/>
      </mesh>
      </Suspense>
     </Canvas>
    </>
   )
 }

 export default TurbineCanvas;