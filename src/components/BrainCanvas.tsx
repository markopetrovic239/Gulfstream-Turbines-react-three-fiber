import React , { Suspense, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import Controls from './Controls';
import BrainScene from './BrainScene';
import BrainDetailedScene from './BrainDetailedScene'
import Scene from './Scene'
import * as THREE from 'three'
import './home.css'
import { HTML, useGLTFLoader } from 'drei'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

 function BrainCanvas(){
   const htmlRef = useRef();
   
   return( 
    <>
    {/*  <Canvas camera={{ position: [0, 0, 10]}}>
     <group position={[-10,0,10]} ref={htmlRef}>
      <HTML> 
      <div><table width="100%">
   <tbody>
   <tr>
<td><h1><b>NEURO-TECH</b></h1></td>
</tr>
</tbody>
</table>
</div>
</HTML>
</group></Canvas> */}
    <Canvas camera={{ position: [0, 0, 10]}}>
     
<group>
      <pointLight intensity={0.1} position={[10, 10, 10]} />
        <rectAreaLight
      intensity={4}
      position={[0, 10, -10]}
      width={30}
      height={30}
      onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
    /> 
    <Suspense fallback={<Scene />}>{<BrainDetailedScene />}</Suspense>
    
    </group>
   {/*  <Controls />  */}
    </Canvas>
    </>
);

}

export default BrainCanvas;