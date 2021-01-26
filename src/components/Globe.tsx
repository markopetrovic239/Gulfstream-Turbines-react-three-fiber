import React, {useRef, useMemo, useEffect, useState, Suspense} from 'react';
import Globe from 'react-globe.gl';
import '../home.css'
import history from '../services/history'
import create from 'zustand'
import {Html} from 'drei'
import { useThree } from 'react-three-fiber';
import * as THREE from 'three'

export const useGlobe = create(set => ({
  show: true,
}))

  const GlobeScene: React.FC = () =>{ 
    const globeEl:any = useRef();


    const[init, setInit] = useState(true)
    // useFrame will run outside of react in animation frames to optimize updates.
    /* useFrame(() => {
  if(init)
      {
       // console.log(globeEl)
        //globeEl.current.controls().autoRotate = true;
        //globeEl.current.controls().autoRotateSpeed = 0.1;
        setInit(false)
    }
    
  
    });  */
  

  const [sites, setSites] = useState([])


  const[show, setShow] = useState(false)
  const[showPaths, setPaths] = useState(false)
  const data =
  [
  {properties:{latitude: 26.367756, longitude:-79.205601, name: "Gulf Stream", size: 1, output: "20 mW"}},
  {properties:{latitude: -36.305848, longitude:23.422722, name: "Agulhas Current", size: 1, output: "20 mW"}},
  {properties:{latitude: -20.497732, longitude:152.006836, name: "South Pacific Gyre", size: 1, output: "20 mW"}},

  ]

  const [funcn, setFuncn] = useState();
    useEffect(() =>{
      setSites(data)
      console.log(globeEl.current.camera())
      setFuncn(globeEl.current.camera())
      globeEl.current.pointOfView({lat: 26.367756, lng: -79.205601,altitude: 2 })
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.1;
    },[showPaths])
    const { camera, gl } = useThree();
    return (
        <div style={{position:'absolute', height: '90px'}}>
   <Globe
      globeImageUrl="/EarthClouds.png"
      bumpImageUrl="/earthbump1k.png"
     // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      animateIn
      ref={globeEl}
     /*  pathsData={showPaths? gData: data}
      pathColor={() => ['rgba(0,0,255,0.4)', 'rgba(255,0,0,0.4)']} */
     labelsData={sites}
      labelLat={(d:any)=> d.properties.latitude}
      labelLng={(d:any)=> d.properties.longitude}
      labelAltitude={0.025}
      labelText={(d:any)=> d.properties.name}
      labelSize={(d:any)=> (d.properties.size + 0.5)}
      labelDotRadius={(d:any)=> d.properties.size} 
     /*  customLayerData={data}
      customThreeObject={(d:any) => new THREE.Mesh(
        new THREE.SphereBufferGeometry(1000),
        new THREE.MeshLambertMaterial({ color: "blue" })
      )}
      customThreeObjectUpdate={(obj, d:any) => {
        Object.assign(obj.position, globeEl.current.getCoords(d.lat, d.lng, d.altitude));
      }} */
     
      labelColor={() => 'rgba(219, 233, 255, 0.75)'}
      labelLabel={(d:any) => `
        <div><b>View Turbines</b></div>
      `}
      labelResolution={2}
      onLabelClick={()=> {
        useGlobe.setState({show: true})
      }}    
     />
  
     </div>
  );
  }
export default GlobeScene;
