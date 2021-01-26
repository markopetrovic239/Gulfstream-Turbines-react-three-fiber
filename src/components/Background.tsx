import React , { Suspense, useRef, useState, useMemo} from 'react';
import * as THREE from 'three';
import { HTML, useGLTFLoader, useCubeTextureLoader, useTextureLoader } from 'drei'
import { TextureLoader, WebGLRenderTarget, Object3D, LinearFilter } from "three"
import { useLoader, extend, useThree, useFrame, ReactThreeFiber } from 'react-three-fiber';

function Background() {
  const { viewport, aspect } = useThree()
 
  const envMap = useCubeTextureLoader(['oceanxz.png', 'oceanxz.png', 'oceanxz.png', 'oceanxz.png', 'oceanxz.png', 'oceanxz.png'], { path: '/' })
  // Calculates a plane filling the screen similar to background-size: cover
  const adaptedHeight = 3800 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
  const adaptedWidth = 5000 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
  return (
    <scene background={envMap}>

    </scene>

  )
}
export default Background