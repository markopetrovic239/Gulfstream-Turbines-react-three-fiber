/* eslint-disable react-hooks/rules-of-hooks */
import React,{useRef, useEffect, useState} from 'react';
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';

 function Ship (props: any){

  const group: any = useRef();
  const  {nodes}: any  =useLoader(GLTFLoader, '/Ship.gltf')
  const [wood] = useState(new THREE.MeshStandardMaterial({ color: '#1b1209', roughness: 1}))
  useEffect(() => {
    group.current.scale.x =0.0035
    group.current.scale.y =0.0035
    group.current.scale.z =0.0035
    group.current.position.x =20
    group.current.position.y = -10
    group.current.position.z =-50
    group.current.rotation.y += Math.PI/3
  /*  group.current.rotation.z += Math.PI/2
    group.current.rotation.y -= Math.PI/2 */

   console.log(nodes)
  }, [group, props.height])




return(
       <mesh geometry={nodes.untitledMesh.geometry} material={wood} ref={group}/>
      )
}


export default Ship;