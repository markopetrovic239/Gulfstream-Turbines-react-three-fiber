import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useLoader, useThree, useFrame } from "react-three-fiber";
import "./home.css";
import * as THREE from "three";
import TurbineScene from "./components/TurbineScene";
import { Plane, OrbitControls} from "drei";
import Overlay from "./components/Overlay"
import Ship from "./components/Ship"
import CircularProgress from '@material-ui/core/CircularProgress';
import { Html } from "@react-three/drei";
import Globe from './components/Globe'
import {useGlobe} from './components/Globe'
import { AppBar, Toolbar, Typography, makeStyles, useTheme, Menu, Button, MenuItem, Color, Tab, Tabs, Box, Select, Theme, createStyles, FormControl } from "@material-ui/core";
import logo from './whitelogo.png'
import Image from 'material-ui-image'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';import { InputLabel } from "@material-ui/core";


const Terrain: any = () => {
  const elevation = useLoader(THREE.TextureLoader, "terrain.png");
  const normal = useLoader(THREE.TextureLoader, "terrainspec.png");
  const color = useLoader(THREE.TextureLoader, "oceanfloor.png");
  return (
    <Plane
      rotation={[-Math.PI / 2, 0, Math.PI/2]}
      position={[0, -10, 0]}
      args={[256, 256, 1024, 1024]}
    >
      <meshStandardMaterial
        attach="material"
        color="white"
        displacementMap={elevation}
        normalMap={normal}
        map={color}
      />
    </Plane>
  );
};
 /*
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useTabStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: 'white',
    width: 500,
  },
}));

 function FullWidthTabs() {
  const classes : any = useTabStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
} */

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#00001a",
    height: '50px',
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

 function Header() {
  const { header, logo } = useStyles();

  const displayDesktop = () => {
    return <Toolbar className={header}>{femmecubatorLogo}</Toolbar>;
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
       Turbine Simulator v1.2
    </Typography>
  );

  return (
    <Toolbar className={header}>{femmecubatorLogo}</Toolbar>
  );
}


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

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
 /*  const recordButtonPosition = (event: any) => {
      setAnchorEl(event.currentTarget);
      setMenuOpen(true);
  }

  let closeMenu = () => {
      setMenuOpen(false);
  } */
  const title = (
    <Typography variant="h5" component="h1" className={logo}>
       Turbine Simulator v1.2
    </Typography>
  );
/* 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  }; */

  return (
<>
     {/* <FullWidthTabs/>*/}
    <Toolbar className={header}>
   
   <FormControl className={classes.formControl}>
   <InputLabel shrink id="demo-simple-select-placeholder-label-label" style={{color: "white"}}>
          Site Locations
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
          <MenuItem value={10}>Agulhas Current</MenuItem>
          <MenuItem value={20}>South Pacific Gyre</MenuItem>
        </Select>
        
   {/* <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          style={{color: '#FFFFFF'}}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} >
          <Menu
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={closeMenu}>
          <MenuItem onClick={closeMenu}> ExampleMenuItem </MenuItem> 
      </Menu>
      </Tab>
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs> */}
          </FormControl>
          <Tab label="Turbine View" style={{color: 'white', marginLeft: '2vw'}} onClick={()=>{useGlobe.setState({show: true})}}/>
          <img  src="./whitelogo.png" alt="nothing" style={{width: '15vw', height: '8vh', paddingLeft: '55vw'}}/>
          
          {/* {title} */}
          
        </Toolbar> 
    {show ? 
    <Canvas camera={{ position: [15, 5, 10]}} /* style={{height: '100%', margin: 0, padding: 0, width: '100%', backgroundColor: 'rgb(0,7,43)',
     background: 'linear-gradient(0deg, rgba(0,7,43,1) 0%, rgba(1,17,64,1) 60%, rgba(9,49,121,0.9192810913427871) 100%)'}} */>
      <fog attach="fog" args={["rgb(1,17,64)", 0, 50]} />
      <OrbitControls 
      position={[10, 10, 10]}
     maxDistance={25} minDistance={20}   //(depth/-25)+20
      enablePan={false}   
       minPolarAngle={11*Math.PI/24} maxPolarAngle={11*Math.PI/24}  
       minAzimuthAngle={2*Math.PI/5}  maxAzimuthAngle={3*Math.PI/5} 
       />
      <Overlay />
      <Suspense fallback={<Html><CircularProgress /></Html>}>
        <Terrain />
        <hemisphereLight
          intensity={2.5}
          color={"rgb(92, 173, 228)"}
          position={[7, 5, 1]}
        />
        <mesh position={[-24, 0, 0]}>
          <TurbineScene />
        </mesh>
        <mesh position={[-20, 0, 0]}>
          <TurbineScene />
        </mesh>
        <mesh position={[-16, 0, 0]}>
          <TurbineScene />
        </mesh>
        <mesh position={[-12, 0, 0]}>
          <TurbineScene />
        </mesh>
        <mesh position={[-8, 0, 0]}>
          <TurbineScene />
        </mesh>
        <mesh position={[-4, 0, 0]}>
          <TurbineScene />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <TurbineScene />
        </mesh>
        <mesh position={[4, 0, 0]}>
          <TurbineScene />
        </mesh>
        <mesh position={[8, 0, 0]}>
          <TurbineScene />
        </mesh>
        <mesh position={[12, 0, 0]}>
          <TurbineScene />
        </mesh>

        <mesh 
        position={[-142, -9, 0]} 
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        material={wireMat}>
        <cylinderBufferGeometry attach="geometry" args={[.08, .08, 500]}/>
        </mesh>
        <Ship />
        
      </Suspense>
    </Canvas>: <Globe />}
  </>
  );
}

export default function AppWrapper(){


  return (
      <App/> 
  )
}


 /*  */