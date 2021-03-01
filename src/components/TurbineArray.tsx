/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import * as THREE from 'three';
import Turbine from './Turbine'
import { useLoader } from 'react-three-fiber';
import {useStore} from './Store'
import { animated, useSpring } from '@react-spring/three';


function TurbineArray(props : any) {
  const height = 28;
  const diff=4;
  const [wireMat] = useState(new THREE.MeshStandardMaterial({ color: 'black', metalness:0.5}))
  const [concrete] = useState(new THREE.MeshStandardMaterial({ color: '#575757', roughness: 0.5}))
/*  const num:any = useStore(state => state.num);
  const speed:any = useStore(state => state.speed); */
  const depth:any = useStore(state => state.depth);
  const { pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, wirePos }: any = useSpring({
    //color: active ? 'hotpink' : 'white',
    pos1: depth <= -100 ? [0, -2, -0.2] : [0, 50, -20],
    pos2: depth <= -200 ? [0, 2, -0.2] : [0, 50, -30],
    pos3: depth <= -300 ? [0, 6, -0.2] : [0, 50, -30],
    pos4: depth <= -400 ? [0, 10, -0.2] : [0, 50, -30],
    pos5: depth <= -500 ? [0, 14, -0.2] : [0, 50, -30],
    pos6: depth <= -600 ? [0, 18, -0.2] : [0, 50, -30],
    pos7: depth <= -700 ? [0, 22, -0.2] : [0, 50, -30],
    pos8: depth <= -800 ? [0, 26, -0.2] : [0, 50, -30],
    wirePos: depth >= -100  ? [0, -22, 0] : depth >= -200 ? [0, -18, 0] 
    :depth >= -300 ? [0, -14, 0] 
    :depth >= -400 ? [0, -10, 0] 
    :depth >= -500 ? [0, -6, 0] 
    :depth >= -600 ? [0, -2, 0] 
    :depth >= -700 ? [0, 2, 0] 
    :depth >= -800 ? [0, 6, 0] 
    :  [0, 100, -0.2],
    
    config: { mass: 1, tension: 100,  precision: 0.00001, velocity: 0.001 }
  })
  /*  const { ...prop } = useSpring({
    //color: active ? 'hotpink' : 'white',
    position: depth >= -300 ? [0, 12, -0.2] : [0, 100, -0.2],
    /* 'material-opacity': hovered ? 0.6 : 0.25,
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    rotation: active ? [THREE.Math.degToRad(180), 0, THREE.Math.degToRad(45)] : [0, 0, 0], */
   // config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
  //}) */

  const color = useLoader(THREE.TextureLoader, "/Original.png");
  const [buoyMat] = useState(new THREE.MeshStandardMaterial({ color: 'white', metalness:0.5, map:color}))
  return(
  
<group>
      <animated.mesh position={wirePos} material={wireMat}>
        <cylinderBufferGeometry attach="geometry" args={[.03, .03, 50]}/>
        <mesh material={buoyMat} position={[0,24,0]}>
         <cylinderBufferGeometry attach="geometry" args={[.3, .3, 2, 50]}/>
        </mesh>
      </animated.mesh>
     
      <mesh position={[0,-9.5,0]} rotation={[Math.PI,Math.PI/2,Math.PI/2]} material={concrete}>
        <boxBufferGeometry attach="geometry" args={[.5,.8,.8]} />
       </mesh>
       
      <animated.mesh position={pos1}>
      <Turbine/>
      </animated.mesh>
      <animated.mesh position={pos2}>
      <Turbine/>
      </animated.mesh>
      <animated.mesh position={pos3}>
      <Turbine/>
      </animated.mesh>
      <animated.mesh position={pos4}>
      <Turbine/>
      </animated.mesh>
      <animated.mesh position={pos5}>
      <Turbine/>
      </animated.mesh>
      <animated.mesh position={pos6}>
      <Turbine/>
      </animated.mesh>
      <animated.mesh position={pos7}>
      <Turbine/>
      </animated.mesh>
      <animated.mesh position={pos8}>
      <Turbine/>
      </animated.mesh>
      
     
  </group>    

);
} 
export default TurbineArray;