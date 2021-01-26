/* eslint-disable react-hooks/rules-of-hooks */
import React,{useRef, useEffect, useState} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader, useFrame } from 'react-three-fiber';
import {useStore} from './Store'
import { useSpring } from '@react-spring/three';

/* import {useStore} from './Overlay'
import { draco } from 'drei' */

 export default function Turbine (props: any){
  const num:any = useStore(state => state.num);
   const speed:any = useStore(state => state.speed);
  const depth:any = useStore(state => state.depth);
  const height:any = [  0, 4, 8, 12, 16, 20, 0, 100]; 
  const group: any = useRef();
 const [dep, setDep] = useState(100)
    const  {nodes}: any  = useLoader(GLTFLoader, '/Spinner.glb');

  /*   useEffect(() => {
      if(props.index + 1 <= depth/-100)
      group.current.position.y = height[props.index]*(depth/(num*-100))
      
    }, [props.index, depth])
useStore.setState({depth: sliderDepth*-1}) */
   /*  useSpring({
      depth: depth,
      onChange: ({ depth }) => { 
        if(props.index + 1 <= num)
        setDep(height[props.index])
        else 
        setDep(100)
      },
      config: {
        tension: 100,    // How much tension is on the spring
        mass: 2,         // The mass of the spring
        velocity: 1    // The initial speed of the movement
    }    
      
   }) */

 useFrame((state) => (group.current.rotation.y -= 0.0034906585 + ((speed - 1.5)/10000)))


return(
       <mesh position={[0, props.index+1 <= num ? height[props.index]*(depth/-num*100): 100*(depth/-num*100), -0.2]} rotation={[Math.PI/2, -Math.PI/2 , -Math.PI/2]}   scale={[0.00004, 0.00004, 0.00004]} geometry={nodes.Asset3DLoadersceneRoot.geometry} material={nodes.Asset3DLoadersceneRoot.material} ref={group}/>
      )
}
 