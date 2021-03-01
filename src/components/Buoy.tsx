/* eslint-disable react-hooks/rules-of-hooks */
import React,{ useState, useRef, useEffect} from 'react';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';

 function Buoy (props: any){
  const group: any = useRef();
  const color = useLoader(THREE.TextureLoader, "/waves.png");
  const [buoyMat] = useState(new THREE.MeshStandardMaterial({ color: 'white', metalness:0.5, map:color}))
  

  useEffect(() => {
    group.current.position.y = props.height
  }, [props.height])

return(
       <mesh material={buoyMat} ref={group}>
         <cylinderBufferGeometry attach="geometry" args={[.3, .3, 2, 50]}/>
       </mesh>
      )
}

export default Buoy;