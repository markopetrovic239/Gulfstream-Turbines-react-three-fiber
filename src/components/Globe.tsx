import React, {useRef, useMemo, useEffect, useState, Suspense} from 'react';
import Globe from 'react-globe.gl';
import '../home.css'
import create from 'zustand'
import { useThree } from 'react-three-fiber';
import {useStore} from './Store'

export const useGlobe = create(set => ({
  show: false,
}))

  const GlobeScene: React.FC = () =>{ 
  const globeEl:any = useRef();
  const [sites, setSites] = useState([])

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
     
      labelColor={() => 'rgba(219, 233, 255, 0.75)'}
      labelLabel={(d:any) => `
        <div><b>View Turbines</b></div>
      `}
      labelResolution={2}
      onLabelClick={()=> {
        useGlobe.setState({show: true})
        useStore.setState({depth: -100, speed: 1})
      }}    
     />
  
     </div>
  );
  }
export default GlobeScene;
