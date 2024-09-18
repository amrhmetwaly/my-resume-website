"use client"

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function ThreeDArt() {
    return (
        <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere args={[1, 100, 200]} scale={2.5} position={[-5, 0, 0]}>
                <MeshDistortMaterial
                    color="#00ff00"
                    attach="material"
                    distort={0.5}
                    speed={1.5}
                    roughness={0}
                />
            </Sphere>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
    )
}