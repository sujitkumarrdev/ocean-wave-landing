"use client"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky , Stars, OrbitControls } from '@react-three/drei'
import Ocean from './ocean'
import GlowingRing from './glowingring'

export default function Scene() {
  return (

    <Canvas camera={{ position: [0, 20, 50], fov: 75 }}
    gl={{antialias: true}}
      >

      <pointLight decay={0} position={[100, 100, 100]} />
      <pointLight decay={0.05} position={[-100, -100, -100]} />

      <color attach="background" args={['#000000']} />
      <Suspense fallback={null}>
        <Ocean/>
          <GlowingRing/>
      </Suspense>
      <Sky sunPosition={[400, 200, -1000]} turbidity={0.01} rayleigh={0.04} mieCoefficient={0.05} mieDirectionalG={0.1} />
      <Stars
          radius={100}     
          depth={50}       
          count={500}     
          factor={4}       
          saturation={0}   
          fade={true}      
        />
      <OrbitControls enableZoom={false}/>
    </Canvas>
  )
}

 
