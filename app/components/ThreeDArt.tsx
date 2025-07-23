"use client"

import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  OrbitControls, 
  Text, 
  Box, 
  Line, 
  Sphere, 
  MeshDistortMaterial, 
  Float,
  Html,
  useTexture,
  Sparkles,
  Stars
} from '@react-three/drei'
import * as THREE from 'three'
import { Group } from 'three'

// Define TypeScript interfaces
interface TechNode {
  name: string;
  color: string;
  position: [number, number, number];
}

interface Connection {
  from: [number, number, number];
  to: [number, number, number];
}

// Technologies to showcase with enhanced neon colors
const technologies: TechNode[] = [
  { name: "React", color: "#61dafb", position: [3, 2, 0] },
  { name: "Node.js", color: "#68ff63", position: [-3, 2, 2] },
  { name: "TypeScript", color: "#007aff", position: [0, 3, -2] },
  { name: "Python", color: "#3088ff", position: [2, -2, 1] },
  { name: "Cloud", color: "#ff9900", position: [-2, -2, -1] },
  { name: "Testing", color: "#ff4dff", position: [-1, 1, 3] },
]

// Animated code block that floats in 3D space
function CodeBlock({ 
  position, 
  rotation, 
  scale = [1, 1, 1], 
  color = "#00ff00" 
}: { 
  position: [number, number, number]; 
  rotation: [number, number, number]; 
  scale?: [number, number, number];
  color?: string;
}) {
  const groupRef = useRef<Group>(null)
  
  // Rotate slightly on hover
  const [hovered, setHovered] = useState(false)
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
      if (hovered) {
        groupRef.current.rotation.z += 0.001
      }
    }
  })
  
  return (
    <group 
      ref={groupRef} 
      position={position} 
      rotation={rotation} 
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Box args={[2, 1.2, 0.1]}>
        <meshStandardMaterial 
          color={hovered ? "#ffffff" : color} 
          opacity={0.7} 
          transparent={true} 
          emissive={color}
          emissiveIntensity={hovered ? 2 : 1.2}
        />
        <Html transform position={[0, 0, 0.06]} scale={0.25} rotation-x={0} rotation-y={0}>
          <div className="bg-black bg-opacity-70 p-3 rounded text-xs text-left w-[400px] font-mono">
            <div style={{ color: '#ff79c6' }}>function <span style={{ color: '#50fa7b' }}>optimizeCode</span>() {`{`}</div>
            <div style={{ marginLeft: 20, color: '#f8f8f2' }}>
              const <span style={{ color: '#bd93f9' }}>solution</span> = analyze(complexity);
            </div>
            <div style={{ marginLeft: 20, color: '#f8f8f2' }}>
              return <span style={{ color: '#ffb86c' }}>solution.improve()</span>;
            </div>
            <div style={{ color: '#ff79c6' }}>{`}`}</div>
          </div>
        </Html>
      </Box>
    </group>
  )
}

// Connection lines between nodes with enhanced glow
function ConnectionLines({ points }: { points: [number, number, number][] }) {
  if (!points || points.length < 2) return null;
  
  const lineRef = useRef(null)
  const [lineOpacity, setLineOpacity] = useState(0.6)
  
  useFrame(({ clock }) => {
    if (lineRef.current) {
      setLineOpacity(0.6 + Math.sin(clock.getElapsedTime() * 1.5) * 0.3)
    }
  })
  
  return (
    <Line
      ref={lineRef}
      points={points}
      color="#4FC3F7"
      lineWidth={2}
      opacity={lineOpacity}
      transparent
    />
  )
}

// Enhanced Tech node with glowing effect
function TechNode({ name, color, position }: TechNode) {
  const sphereRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      // Enhanced pulsing effect
      const pulseSpeed = hovered ? 4 : 2
      const scale = 1 + Math.sin(clock.getElapsedTime() * pulseSpeed) * 0.08
      sphereRef.current.scale.set(scale, scale, scale)
    }
  })
  
  return (
    <group position={position}>
      <Sphere 
        ref={sphereRef} 
        args={[0.5, 32, 32]} 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={3}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={hovered ? 2.5 : 1.5}
        />
      </Sphere>
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
      {/* Add a subtle glow sphere around the node */}
      <Sphere args={[0.6, 16, 16]}>
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.15} 
        />
      </Sphere>
    </group>
  )
}

// Enhanced data flow particles
function DataFlow({ 
  startPoint, 
  endPoint, 
  numParticles = 5,
  color = "#4fc3f7"
}: { 
  startPoint: [number, number, number]; 
  endPoint: [number, number, number]; 
  numParticles?: number;
  color?: string;
}) {
  const particles = useRef<Array<{position: THREE.Vector3; speed: number}>>([])
  const groupRef = useRef<THREE.Group>(null)
  
  useEffect(() => {
    // Initialize particle positions
    if (startPoint && endPoint) {
      particles.current = Array(numParticles).fill(undefined).map(() => ({
        position: new THREE.Vector3(...startPoint),
        speed: 0.04 + Math.random() * 0.06
      }))
    }
  }, [startPoint, endPoint, numParticles])
  
  useFrame(() => {
    if (!groupRef.current || !startPoint || !endPoint) return
    
    // Move particles along the path
    particles.current.forEach((particle, i) => {
      const direction = new THREE.Vector3(
        endPoint[0] - startPoint[0],
        endPoint[1] - startPoint[1],
        endPoint[2] - startPoint[2]
      ).normalize()
      
      particle.position.add(direction.multiplyScalar(particle.speed))
      
      // Reset particle when it reaches the end
      const distance = new THREE.Vector3(...endPoint).distanceTo(particle.position)
      if (distance < 0.3) {
        particle.position.set(...startPoint)
      }
      
      // Update mesh position
      const child = groupRef.current?.children[i]
      if (child) {
        child.position.copy(particle.position)
      }
    })
  })
  
  if (!startPoint || !endPoint) return null;
  
  return (
    <group ref={groupRef}>
      {Array(numParticles).fill(undefined).map((_, i) => (
        <mesh key={i} position={startPoint}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  )
}

// Main scene component
function Scene() {
  const containerRef = useRef<THREE.Group>(null)
  
  // Disable random connections to reduce complexity
  const connections: Connection[] = [];
  
  // Create stable connections between nodes
  for (let i = 0; i < technologies.length; i++) {
    const nextIndex = (i + 1) % technologies.length;
    connections.push({
      from: technologies[i].position,
      to: technologies[nextIndex].position
    });
  }
  
  useFrame(({ clock }) => {
    if (containerRef.current) {
      // Gentle rotation of the entire scene
      containerRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.2
    }
  })
  
  return (
    <group ref={containerRef}>
      {/* Central sphere representing core engineering skills */}
      <Float floatIntensity={0.5} rotationIntensity={0.2} speed={1.5}>
        <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#2C3E50"
            attach="material"
            distort={0.4}
            speed={1.5}
            metalness={0.9}
            roughness={0.1}
            emissive="#61dafb"
            emissiveIntensity={1.2}
          />
        </Sphere>
        
        <Text
          position={[0, 0, 1.3]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          SOFTWARE ENGINEERING
        </Text>
      </Float>
      
      {/* Add sparkles effect around the scene */}
      <Sparkles count={80} scale={15} size={1.5} speed={0.3} opacity={0.6} />
      
      {/* Technology nodes */}
      {technologies.map((tech, i) => (
        <TechNode key={i} {...tech} />
      ))}
      
      {/* Connections between nodes */}
      {connections.map((connection, i) => (
        <ConnectionLines key={i} points={[connection.from, connection.to]} />
      ))}
      
      {/* Data flow particles with different colors */}
      {connections.map((connection, i) => {
        // Match color to source node
        const sourceNode = technologies.find(tech => 
          tech.position[0] === connection.from[0] && 
          tech.position[1] === connection.from[1] && 
          tech.position[2] === connection.from[2]
        )
        return (
          <DataFlow 
            key={i} 
            startPoint={connection.from} 
            endPoint={connection.to}
            numParticles={3}
            color={sourceNode?.color || "#4fc3f7"}
          />
        )
      })}
      
      {/* Code blocks with enhanced glow */}
      <CodeBlock 
        position={[2.5, 0, -2]} 
        rotation={[0, Math.PI / 4, 0]} 
        color="#61dafb"
      />
      
      <CodeBlock 
        position={[-2.5, 0.5, -1.5]} 
        rotation={[0, -Math.PI / 3, 0]} 
        scale={[0.8, 0.8, 0.8]}
        color="#ff4dff"
      />
    </group>
  )
}

// Simple fallback for when the scene is loading
function FallbackScene() {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#61dafb" />
    </mesh>
  )
}

export default function ThreeDArt() {
  const [hasWebGL, setHasWebGL] = useState(true);
  
  // Check for WebGL support on client side
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const hasWebGL = !!(
        window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setHasWebGL(hasWebGL);
    } catch (e) {
      console.error("WebGL detection failed:", e);
      setHasWebGL(false);
    }
  }, []);
  
  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/50 rounded-lg p-4">
        <div className="text-center">
          <p className="text-white text-lg mb-2">3D Experience Unavailable</p>
          <p className="text-blue-300 text-sm">Your browser doesn't support WebGL</p>
        </div>
      </div>
    );
  }
    
  return (
    <Canvas 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'auto',
        background: 'transparent'
      }}
      camera={{ position: [0, 0, 10], fov: 50 }}
      gl={{ 
        antialias: true, 
        alpha: true, 
        powerPreference: 'default', // Changed from high-performance to default
        precision: 'highp',
        failIfMajorPerformanceCaveat: false // Be more forgiving of performance issues
      }}
      dpr={[1, 1.5]} // Reduced from [1, 2] for better performance
    >
      <color attach="background" args={['#000']} />
      <fog attach="fog" args={['#000', 5, 20]} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#0088ff" />
      
      <Suspense fallback={<FallbackScene />}>
        <Scene />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          rotateSpeed={0.5}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  )
}