import React from "react";
import { useLoader} from "react-three-fiber";
import * as THREE from "three";
import { Plane } from "drei";

const Terrain: any = () => {

  const elevation = useLoader(THREE.TextureLoader, "terrain.png");
  const normal = useLoader(THREE.TextureLoader, "terrainspec.png");
  const color = useLoader(THREE.TextureLoader, "ofloor.png");
  return (
    <>
    <Plane
      rotation={[-Math.PI / 2, 0, Math.PI/2]}
      position={[-100, -10, 0]}
      args={[400, 400, 1024, 1024]}
    >
      <meshStandardMaterial
        attach="material"
        color="#c2b280"
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
        color="#c2b280"
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
        color="#c2b280"
        map={color}
      />
    </Plane>
    </>
  );
};
 
export default Terrain