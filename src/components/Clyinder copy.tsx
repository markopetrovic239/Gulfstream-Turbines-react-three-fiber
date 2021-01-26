import React,{useRef, useMemo, useEffect, useState} from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useLoader, extend, useThree, useFrame, ReactThreeFiber } from 'react-three-fiber';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement }
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls: any = useRef();
  useFrame(state => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
    />
  );
};
function Cyl(props: any) {
   const group: any = useRef();
  const { camera, gl } = useThree();

  const[init, setInit] = useState(true)
  const[num, setNum] = useState(0)
  // useFrame will run outside of react in animation frames to optimize updates.
  //useFrame(state=> group.current.children.rotation.y += 0.0005); 
  //group.current.children.rotation.y += 0.0005
  console.log(group)
  return(

     <group ref={group}>
           <pointLight intensity={0.1} position={[10, 10, 10]} />
             <rectAreaLight
           intensity={4}
           position={[0, 10, -10]}
           width={30}
           height={30}
          // onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
         /> 
    { num >= 0? <mesh position={[0,2,0]}>
       <cylinderBufferGeometry attach="geometry" args={[1, 1, 1]} />
       <meshNormalMaterial attach="material" />
     </mesh>: null}
     { num >= 1? <mesh position={[0,2,3]}>
       <cylinderBufferGeometry attach="geometry" args={[1, 1, 1]} />
       <meshNormalMaterial attach="material" />
     </mesh>:null}
     { num >= 2? <mesh position={[0,2,6]}>
       <cylinderBufferGeometry attach="geometry" args={[1, 1, 1]} />
       <meshNormalMaterial attach="material" />
     </mesh>:null}
    
   <CameraControls></CameraControls>
   
     </group>


);
}
export default Cyl;