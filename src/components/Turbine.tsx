/* eslint-disable react-hooks/rules-of-hooks */
import React,{useRef, useEffect, useState} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader, useFrame } from 'react-three-fiber';
import {useStore} from './Store'
import {animated,  useSpring } from '@react-spring/three';

/* import {useStore} from './Overlay'
import { draco } from 'drei' */

export default function Turbine (){
  const speed:any = useStore(state => state.speed);
  const group: any = useRef();
  const  {nodes}: any  = useLoader(GLTFLoader, '/Spinner.glb');


 useFrame(() => (group.current.rotation.y += (2*Math.PI/1800)* speed/1.75))


return(
       <mesh rotation={[Math.PI/2, -Math.PI/2 , -Math.PI/2]}   scale={[0.00004, 0.00004, 0.00004]}
        geometry={nodes.Asset3DLoadersceneRoot.geometry} material={nodes.Asset3DLoadersceneRoot.material} ref={group} />
      )
}

