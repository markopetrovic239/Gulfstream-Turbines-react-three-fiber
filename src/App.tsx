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
import Dolphin from './components/Dolphin'

const Terrain: any = () => {
  const elevation = useLoader(THREE.TextureLoader, "terrain.png");
  const normal = useLoader(THREE.TextureLoader, "terrainspec.png");
  const color = useLoader(THREE.TextureLoader, "oceanfloor.png");
  return (
    <>
    <Plane
      rotation={[-Math.PI / 2, 0, Math.PI/2]}
      position={[-100, -10, 0]}
      args={[400, 400, 1024, 1024]}
    >
      <meshStandardMaterial
        attach="material"
        color="white"
        displacementMap={elevation}
        normalMap={normal}
        map={color}
      />
    </Plane>
    <Plane
      rotation={[-Math.PI / 2, 0, Math.PI/2]}
      position={[0, -10, -400]}
      args={[400, 400, 1024, 1024]}
    >
      <meshStandardMaterial
        attach="material"
        color="white"
        map={color}
      />
    </Plane>
    <Plane
      rotation={[-Math.PI / 2, 0, Math.PI/2]}
      position={[0, -10, 400]}
      args={[400, 400, 1024, 1024]}
    >
      <meshStandardMaterial
        attach="material"
        color="white"
        map={color}
      />
    </Plane>
    </>
  );
};
 
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#00001a",
    height: '8vh',
    fontFamily: "Arial, serif",
  },
  logo: {
    fontFamily: "Candara, sans-serif",
    fontWeight: 60,
    color: "#FFFEFE",
    backgroundColor: "#00001a",
    width: "15vw",
    height: "calc(100vh * .05)",
    marginLeft: "2vw",
  },
}));


const selectStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    icon: {
      fill: "white",
  },
  }),
);
          
 function App() {
  const { header, logo } = useStyles();
  const show:any = useGlobe(state => state.show);
  const [wireMat] = useState(new THREE.MeshStandardMaterial({ color: 'black', metalness:0.5}))
  const classes : any = selectStyles();
  const [age, setAge] = React.useState('');
  const depth:any = useStore(state => state.depth);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
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
  return (
<>
<Toolbar className={header}>
   
   <FormControl className={classes.formControl}>
   <InputLabel shrink id="demo-simple-select-placeholder-label-label" style={{color: "white", fontFamily: 'Arial'}}>
          SITE LOCATION
        </InputLabel>
      <Select
          value={age}
          color="secondary"
          onChange={handleChange}
          style={{color: "white", width: "11vw"}}
          displayEmpty
          autoWidth
          variant="standard"
          className={classes.selectEmpty}
          inputProps={{
            classes: {
                icon: classes.icon,
                      },
                  }}
                  >
          <MenuItem value="">
          Gulf Stream
          </MenuItem>
      </Select>
          </FormControl>
          <Tab label={show ? "Earth View" : "Turbine View"} style={{color: 'white', marginLeft: '2vw'}} onClick={()=>{
            useStore.setState({depth: -100, speed: 1})
            useGlobe.setState({show: !show})}}/>
          <a href="https://gulfstream.energy/">
          <img  src="./OWWT.png" alt="nothing" style={{width: '3.5vw', height: '6.9vh', paddingLeft: '75vw', paddingTop: '1vh', paddingBottom: '1vh'}}/>
          </a>
    </Toolbar> 

    {show ? 
    <Canvas camera={{ position: [15, 5, 10]}}>
     <Overlay />

     <OrbitControls 
      position={[10, 10, 10]}
      maxDistance={25} minDistance={20}
      enablePan={false}   
      minPolarAngle={10.5*Math.PI/24} maxPolarAngle={10.5*Math.PI/24}  
      minAzimuthAngle={2*Math.PI/5}  maxAzimuthAngle={3*Math.PI/5} 
       />

      <fog attach="fog" args={["rgb(1,17,64)", 0, 50]} />
           
      
      <Suspense fallback={<Html><CircularProgress /></Html>}>

        <Suspense fallback={null}>
          <Dolphin pos={[-3,5.3,-10]} tailSpeed={3} height = {1.7} pathName={"/dolphin2.glb"}/>
          <Dolphin pos={[-2.8,5.4,-9]} tailSpeed={3.3} height = {1.7} pathName={"/dolphin3.glb"}/>
          <Dolphin pos={[-2.5,6,-11]} tailSpeed={2} height = {1.7} pathName={"/dolphin4.glb"}/>
          <Dolphin pos={[-3.2,5.5,-11]} tailSpeed={2.5} height = {1.7} pathName={"/dolphin5.glb"}/>
          <Dolphin pos={[-2.7,5.7,-9]} tailSpeed={2.8} height = {1.7} pathName={"/dolphin6.glb"}/>
        </Suspense>
      
      <animated.mesh position={dep}>
       <Terrain />
        <hemisphereLight
          intensity={2.5}
          color={"rgb(92, 173, 228)"}
          position={[7, 5, 1]}
        />
        <mesh position={[-24, 0, 0]}>
          <TurbineArray />
        </mesh>
        <mesh position={[-20, 0, 0]}>
          <TurbineArray />
        </mesh>
        <mesh position={[-16, 0, 0]}>
          <TurbineArray />
        </mesh>
        <mesh position={[-12, 0, 0]}>
          <TurbineArray />
        </mesh>
        <mesh position={[-8, 0, 0]}>
          <TurbineArray />
        </mesh>
       <mesh position={[-4, 0, 0]}>
          <TurbineArray />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <TurbineArray />
        </mesh>
        <mesh position={[4, 0, 0]}>
          <TurbineArray />
        </mesh>
        <mesh position={[8, 0, 0]}>
          <TurbineArray />
        </mesh>
        <mesh position={[12, 0, 0]}>
          <TurbineArray />
        </mesh>
        <mesh 
        position={[-142, -9.5, 0]} 
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        material={wireMat}>
        <cylinderBufferGeometry attach="geometry" args={[.08, .08, 500]}/>
        </mesh>
        <Ship />
      </animated.mesh>
    </Suspense>

    </Canvas>: 
    <Globe />
    }
  </>
  );
}

export default function AppWrapper(){


  return (
      <App/> 
  )
}


 /*  */