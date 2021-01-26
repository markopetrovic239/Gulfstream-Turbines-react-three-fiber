import React ,{useRef, useMemo, useEffect, useState} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { BufferGeometry, Color, LightProbe, MeshBasicMaterial, Texture } from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
import Scene from './Scene';
import nuerotechpinkblue from './neurotechpinkblue.png'
import { useLoader, extend, useThree, useFrame, ReactThreeFiber } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// https://spectrum.chat/react-three-fiber/general/property-orbitcontrols-does-not-exist-on-type-jsx-intrinsicelements~44712e68-4601-4486-b4b4-5e112f3dc09e
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

interface OrbitRef {
  obj: {
    update: Function;
  };
}

extend({ OrbitControls });

const Controls: React.FC<any> = (props) => {
  const ref = useRef<OrbitRef>(null);
  const { camera, gl } = useThree();
  useFrame(() => {
    ref.current?.obj?.update();
  });
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />;
};

RectAreaLightUniformsLib.init()



function SetupBrain(props: any){
  const group: any = useRef<OrbitRef>(null);
  const group2: any = useRef();
  const groupMaster: any = useRef<OrbitRef>(null);
  const { camera, gl } = useThree();
 const[init, setInit] = useState(true)
  // useFrame will run outside of react in animation frames to optimize updates.
  useFrame(() => {
if(init)
    {
      console.log(group)
      console.log(group2)
      console.log(groupMaster)
 /*    group2.current.rotation.x = Math.PI/2
    group2.current.rotation.y = Math.PI
    group2.current.rotation.z = Math.PI
    group2.current.scale.x =0.75
    group2.current.scale.y =0.75
    group2.current.scale.z =0.75
    group2.current.position.y = 0
    group.current.parent.position.y = 0
    group.current.parent.rotation.x =Math.PI
    group.current.parent.rotation.y = 0
    group.current.parent.rotation.z = Math.PI */
    group.current.parent.scale.x =2
    group.current.parent.scale.y =2
    group.current.parent.scale.z =2
    group.current.parent.rotation.y += Math.PI
      setInit(false)
  }
    group.current.children.rotation.y += 0.0005;
   group.current?.obj?.update();

  }); 

  let  brainModel: any  = useLoader(GLTFLoader, '/brainandhead.glb');
  let headModel:any = useLoader(GLTFLoader, '/brain-head-centered.glb')
console.log(brainModel)
console.log(headModel)
//brainModel.nodes.node_id3002.geometry.attributes =  brainModel.nodes.mesh_id32.geometry.attributes
/* const brainRef: any = useRef()
brainRef.current.mesh = brainModel.nodes.node_id6 */
const geoArr = [brainModel.nodes.node_id34.children[0].geometry, brainModel.nodes.node_id34.children[1].geometry]
const combinedGeometry: THREE.BufferGeometry = BufferGeometryUtils.mergeBufferGeometries(geoArr);
const headGeometry: THREE.BufferGeometry = brainModel.nodes.node_id3002.geometry

//const head = BufferGeometryUtils.mergeBufferAttributes([headGeometry.attributes, combinedGeometry.attributes])
//const combinedVertices = BufferGeometryUtils.mergeVertices(combinedGeometry)
/* 
 */
const [material, setMaterial]  = useState(new THREE.MeshLambertMaterial({color: '#333382', transparent:true, opacity: 0.7, lightMapIntensity: .1}))
const [headMat, setHeadMat] = useState(new THREE.MeshLambertMaterial({ color: 'pink', transparent:true, opacity: 0.1}))
const [scene, setScene] = useState(brainModel.scene)
const headTexture : any = useMemo(() => new THREE.TextureLoader().load(nuerotechpinkblue), [nuerotechpinkblue])
//const headTexture : any = useLoader(THREE.ImageLoader, '/nuerotechpinkblue.png')
//const [headMat, setHeadMat] = useState(new THREE.MeshPhysicalMaterial({map:headTexture, transparent:true, opacity: 0.9}))
function heatMapMaterial(){
  let mesh, material;
			let pointLight, ambientLight;
}
function handleFunc(){
//const j = new THREE.MeshLambertMaterial(headTexture)
 /* const m = new THREE.MeshDepthMaterial({ transparent:true, opacity: 0.1})
  setHeadMat(m) */
  
}
const ang : number = Math.PI
console.log(ang)
//console.log(material)
////console.log(color)
   /* <mesh material={headMat}>
      <primitive object={scene} onClick={handleFunc} material={headMat}/>
      </mesh> */
    
  return (
   <>
  
    <group ref={group} > 
       <mesh visible name="head" geometry={combinedGeometry}
       material={material} 
        onClick={handleFunc}
   >
     
          </mesh> <orbitControls ref={group}args={[camera, gl.domElement]}  {...props} />
          <ambientLight ref={group}></ambientLight><lightProbe ref={group}></lightProbe>
  </group>
   
  {/*    <group ref={group2} >
         <mesh 
          
      geometry={headGeometry}  
        onClick={handleFunc}
   material={headMat}>


          </mesh> 
         
     </group> */}
     
     </>
  );
  }

  const BrainScene: React.FC = () => (
    <SetupBrain/>
  );
  
export default BrainScene;
