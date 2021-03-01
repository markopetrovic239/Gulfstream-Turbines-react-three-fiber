import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useLoader, useThree, useFrame } from "react-three-fiber";
import "./home.css";
import * as THREE from "three";
import TurbineArray from "./components/TurbineArray";
import { Plane, OrbitControls} from "drei";
import Overlay from "./components/Overlay"
import Ship from "./components/Ship"
import CircularProgress from '@material-ui/core/CircularProgress';
import { Html } from "@react-three/drei";
import Globe from './components/Globe'
import {useGlobe} from './components/Globe'
import { AppBar, Toolbar, Typography, makeStyles, useTheme, Menu, Button, MenuItem, Color, Tab, Tabs, Box, Select, Theme, createStyles, FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { animated, useSpring } from "@react-spring/three";
import {useStore} from './components/Store'
import Dolphin from './components/Dolphin2'
import MainStation from './components/MainStation'
import SingleStation from './components/SingleStation.js'
import Terrain from './components/Terrain'
          
 function App() {
  const station:any = useStore(state => state.station);
  const depth:any = useStore(state => state.depth);
  const { dep }: any = useSpring({
    dep: depth >= -100  ? [0, 7, 0] : depth >= -200 ? [0, 4, 0] 
        :depth >= -300 ? [0, 1, 0] 
        :depth >= -400 ? [0, -2, 0] 
        :depth >= -500 ? [0, -5, 0] 
        :depth >= -600 ? [0, -8, 0] 
        :depth >= -700 ? [0, -11, 0] 
        :[0, -15, 0],
    config: { mass: 1, tension: 100,  precision: 0.00001 }
  })

  const { single, main }: any = useSpring({
    single: station === "single"  ? [0, 0, 0] 
                                : [150, 105, 100],
    main: station === "main" ? [0, 0, 0] 
                             : [-150, -1005, -100],
    config: { mass: 1, tension: 100,  precision: 0.00001 }
  })
  useEffect(()=>{
    console.log(main.animation.values[1])
  }, [station])

  return (

    <Canvas camera={{ position: [15,5,10]}}>
     <Overlay />

     <OrbitControls 
      position={[10, 10, 10]}
      //maxDistance={25} minDistance={20}
      enablePan={false}   
      //minPolarAngle={10.5*Math.PI/24} maxPolarAngle={10.5*Math.PI/24}  
      //minAzimuthAngle={2*Math.PI/5}  maxAzimuthAngle={3*Math.PI/5} 
       />

      <fog attach="fog" args={["rgb(1,17,64)", 0, 50]} />
         
      
      <Suspense
       fallback={<Html><CircularProgress /></Html>}
       >
{station === 'single' ?   <animated.mesh
    position={single}
      >
      <SingleStation />
           </animated.mesh>   : null}
  
    
        
      
      {/*   <Suspense fallback={null}>
          <Dolphin position={[7,5.3,0]}/>
          <Dolphin position={[6.8,5.4,1]}/>
          <Dolphin position={[6.5,6,-1]}/>
          <Dolphin position={[7.2,5.5,-1]} />
          <Dolphin position={[6.7,5.7,1]} />
        </Suspense> */}

    <animated.mesh position={dep}>    
      <animated.mesh position={main}>
        <Terrain /> 
        <MainStation />
      </animated.mesh>     
    </animated.mesh> 

    </Suspense>

    </Canvas>
  
  );
}

export default function AppWrapper(){


  return (
      <App/> 
  )
}


 /*  */