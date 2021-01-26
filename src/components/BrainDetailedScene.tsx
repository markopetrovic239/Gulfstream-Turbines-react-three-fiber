import React ,{useRef, useMemo, useEffect, useState} from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe';
//import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
//import { BufferGeometry, Color, Geometry, LightProbe, MeshBasicMaterial, Texture } from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
//import nuerotechpinkblue from './neurotechpinkblue.png'
import { useLoader, extend, useThree, useFrame, ReactThreeFiber } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useGLTF } from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import Globe from 'react-globe.gl';
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
  obj: {hree
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
  const brainGroup: any = useRef();


  const { camera, gl } = useThree();

  
 const[init, setInit] = useState(true)

 const [hover, setHover] = useState(false)
  // useFrame will run outside of react in animation frames to optimize updates.

 

/*  useSpring({
   color : hover ? 'white' : 'red',
   onChange: ({ color }) => materials[""].color.set(color)
}) */
const N_PATHS = 10;
const MAX_POINTS_PER_LINE = 10000;
const MAX_STEP_DEG = 1;
const MAX_STEP_ALT = 0.015;
const gData: any = [...Array(N_PATHS).keys()].map(() => {
  let lat = (Math.random() - 0.5) * 90;
  let lng = (Math.random() - 0.5) * 360;
  let alt = 0;

  return [[lat, lng, alt], ...[...Array(Math.round(Math.random() * MAX_POINTS_PER_LINE)).keys()].map(() => {
    lat += (Math.random() * 2 - 1) * MAX_STEP_DEG;
    lng += (Math.random() * 2 - 1) * MAX_STEP_DEG;
    alt += (Math.random() * 2 - 1) * MAX_STEP_ALT;
    alt = Math.max(0, alt);

    return [lat, lng, alt];
  })];
});

const Globe2: any = new ThreeGlobe({ animateIn: false })
  .globeImageUrl('C:/Users/marko/3D Objects/react-three-fiber-typescript-master/src/components/earth-blue-marble.jpg')
  .bumpImageUrl('C:/Users/marko/3D Objects/react-three-fiber-typescript-master/src/components/earth-blue-marble.jpg')
  .pathsData(gData)
  .pathColor(() => ['rgba(0,0,255,0.4)', 'rgba(255,0,0,0.4)'])
  .pathDashLength(0.01)
  .pathDashGap(0.004)
  .pathDashAnimateTime(100000);

setTimeout(() => {
  Globe2
    .pathPointAlt(pnt => pnt[3]) // set altitude accessor
    .pathTransitionDuration(4000)
}, 6000);
   // custom globe material
   const globeMaterial = Globe2.globeMaterial();
   globeMaterial.bumpScale = 10;
   new THREE.TextureLoader().load('./earth-blue-marble.jpg', (texture) => {
     Globe2.globeMaterial.specularMap = texture;
     Globe2.globeMaterial.specular = new THREE.Color('grey');
     Globe2.globeMaterial.shininess = 15;
   });

   console.log(Globe)
  return (
   <>
    <group ref={brainGroup}> 
    {/*   <a.primitive object={Globe2}  /> */}
    {/* <Globe
    pathsData={gData}
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
  /> */}
    <orbitControls ref={brainGroup}args={[camera, gl.domElement]}  {...props} /> 
  </group>
   
  {/*    <group ref={group2} >
         <mesh 
          
      geometry={headGeometry}  
        
   material={headMat}>


          </mesh> 
         
     </group> */}
     
     </>
  );
  }

  const BrainDetailedScene: React.FC = () => (
    <SetupBrain/>
  );
  
export default BrainDetailedScene;
