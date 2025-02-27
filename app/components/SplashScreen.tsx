"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Sphere,
  Box,
  Torus,
  Text,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  MeshReflectorMaterial,
  Environment,
  OrbitControls,
  Line,
  Tetrahedron,
  Octahedron,
  Icosahedron,
  Stars,
  PerspectiveCamera,
  CameraShake,
  Sparkles,
  useTexture
} from '@react-three/drei'
import * as THREE from 'three'
import ThreeCustomText from './ThreeCustomText'
import Image from 'next/image'

// TypeScript interfaces
interface NeuralNodeProps {
  position: [number, number, number];
  color: string;
  size?: number;
  pulseSpeed?: number;
}

interface NeuralConnectionProps {
  startPoint: [number, number, number];
  endPoint: [number, number, number];
  color: string;
}

interface BinaryStreamProps {
  position: [number, number, number];
  rotation: [number, number, number];
  length?: number;
  color?: string;
}

interface FloatingShapeProps {
  shape: "cube" | "tetrahedron" | "octahedron" | "icosahedron" | "torus";
  position: [number, number, number];
  rotation: [number, number, number];
  size?: number;
  color?: string;
}

interface CircuitPathProps {
  points: [number, number, number][];
  width?: number;
  height?: number;
  color?: string;
}

interface SplashScreenProps {
  onComplete?: () => void;
}

// Neural network node
function NeuralNode({ position, color, size = 0.2, pulseSpeed = 1 }: NeuralNodeProps) {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * pulseSpeed
      ref.current.scale.setScalar(size * (1 + 0.2 * Math.sin(t)))
    }
  })
  
  return (
    <Sphere ref={ref} position={position} args={[size, 16, 16]}>
      <MeshDistortMaterial
        color={color}
        speed={4}
        distort={0.3}
        metalness={1}
        roughness={0}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </Sphere>
  )
}

// Data flow between neural nodes
function NeuralConnection({ startPoint, endPoint, color }: NeuralConnectionProps) {
  const lineRef = useRef(null)
  const [opacity, setOpacity] = useState(0)
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const pulse = (Math.sin(t * 3) + 1) / 2 * 0.4 + 0.1
    setOpacity(pulse)
  })
  
  return (
    <Line
      ref={lineRef}
      points={[startPoint, endPoint]}
      color={color}
      lineWidth={1.5}
      opacity={opacity}
      transparent
    />
  )
}

// Binary stream effect
function BinaryStream({ position, rotation, length = 4, color = "#00ff00" }: BinaryStreamProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [binaryText, setBinaryText] = useState("")
  
  useEffect(() => {
    // Generate random binary string
    const generateBinary = () => {
      let binary = ""
      for (let i = 0; i < 120; i++) {
        binary += Math.round(Math.random())
      }
      return binary
    }
    
    setBinaryText(generateBinary())
    
    // Update binary every 2 seconds
    const interval = setInterval(() => {
      setBinaryText(generateBinary())
    }, 2000)
    
    return () => clearInterval(interval)
  }, [])
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = (clock.getElapsedTime() * 0.5) % length - length / 2
    }
  })
  
  return (
    <group position={position} rotation={rotation}>
      <group ref={groupRef}>
        <ThreeCustomText
          position={[0, 0, 0]}
          fontSize={0.2}
          color={color}
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
          lineHeight={1.2}
        >
          {binaryText}
        </ThreeCustomText>
      </group>
    </group>
  )
}

// Floating geometric shape
function FloatingShape({ shape, position, rotation, size = 1, color = "#ffffff" }: FloatingShapeProps) {
  const ref = useRef<THREE.Group>(null)
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.5
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.5
      ref.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.4) * 0.5
    }
  })
  
  let ShapeComponent
  
  switch (shape) {
    case "cube":
      ShapeComponent = <Box args={[size, size, size]} />
      break
    case "tetrahedron":
      ShapeComponent = <Tetrahedron args={[size, 0]} />
      break
    case "octahedron":
      ShapeComponent = <Octahedron args={[size, 0]} />
      break
    case "icosahedron":
      ShapeComponent = <Icosahedron args={[size, 0]} />
      break
    case "torus":
      ShapeComponent = <Torus args={[size * 0.7, size * 0.3, 16, 32]} />
      break
    default:
      ShapeComponent = <Box args={[size, size, size]} />
  }
  
  return (
    <group ref={ref} position={position} rotation={rotation}>
      {ShapeComponent}
      <MeshWobbleMaterial
        color={color}
        factor={0.2}
        speed={2}
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </group>
  )
}

// Circuit board path
function CircuitPath({ points, width = 0.05, height = 0.02, color = "#4fc3f7" }: CircuitPathProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const curve = new THREE.CatmullRomCurve3(
    points.map(point => new THREE.Vector3(...point))
  )
  
  const tubeGeometry = new THREE.TubeGeometry(curve, 32, width, 8, false)
  
  useFrame(({ clock }) => {
    if (meshRef.current && meshRef.current.material) {
      const t = clock.getElapsedTime()
      const material = meshRef.current.material as THREE.MeshStandardMaterial
      material.emissiveIntensity = (Math.sin(t * 3) + 1) / 2 * 0.5 + 0.2
    }
  })
  
  return (
    <mesh ref={meshRef} geometry={tubeGeometry}>
      <meshStandardMaterial
        color={color}
        metalness={1}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

// New component for the favicon loader in 3D scene
function FaviconLoader({ position = [0, 0, 0], scale = 1 }) {
  const ref = useRef<THREE.Group>(null)
  const textureMap = useTexture('/favicon.ico')
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime()
      ref.current.rotation.y = t * 0.5
      ref.current.rotation.z = Math.sin(t * 0.3) * 0.2
      ref.current.scale.setScalar(scale * (1 + 0.1 * Math.sin(t * 2)))
    }
  })
  
  return (
    <group ref={ref} position={new THREE.Vector3(...position)}>
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial map={textureMap} emissiveMap={textureMap} emissive="#ffffff" emissiveIntensity={0.5} />
      </Box>
      <Sparkles count={20} scale={3} size={0.4} speed={0.3} opacity={0.2} color="#88ccff" />
    </group>
  )
}

// Scene component for the splash screen
function SplashScene() {
  const groupRef = useRef<THREE.Group>(null)
  
  // Neural network structure
  const neuralNodes: NeuralNodeProps[] = [
    { position: [0, 0, 0], color: "#61dafb" },
    { position: [-1, 0.8, 0.5], color: "#ff6bcb" },
    { position: [1, 0.8, 0.5], color: "#ffcb6b" },
    { position: [-0.5, -0.8, 0.5], color: "#6bff9e" },
    { position: [0.5, -0.8, 0.5], color: "#6b95ff" },
    { position: [-1.5, 0, 1], color: "#c36bff" },
    { position: [1.5, 0, 1], color: "#ff6b6b" },
  ]
  
  // Circuit paths
  const circuitPaths: CircuitPathProps[] = [
    {
      points: [
        [-2, -2, 0],
        [-1.5, -1.5, 0.2],
        [-1, -1, 0.4],
        [-0.5, -0.5, 0.6],
        [0, 0, 0.8],
        [0.5, 0.5, 0.6],
        [1, 1, 0.4],
        [1.5, 1.5, 0.2],
        [2, 2, 0]
      ],
      color: "#00bcd4"
    },
    {
      points: [
        [-2, 2, 0],
        [-1.5, 1.5, 0.2],
        [-1, 1, 0.4],
        [-0.5, 0.5, 0.6],
        [0, 0, 0.8],
        [0.5, -0.5, 0.6],
        [1, -1, 0.4],
        [1.5, -1.5, 0.2],
        [2, -2, 0]
      ],
      color: "#4caf50"
    }
  ]
  
  // Generate neural connections
  const neuralConnections: NeuralConnectionProps[] = []
  for (let i = 0; i < neuralNodes.length; i++) {
    for (let j = i + 1; j < neuralNodes.length; j++) {
      if (Math.random() > 0.5) {
        neuralConnections.push({
          startPoint: neuralNodes[i].position,
          endPoint: neuralNodes[j].position,
          color: neuralNodes[i].color
        })
      }
    }
  }
  
  // Floating shapes
  const floatingShapes: FloatingShapeProps[] = [
    { shape: "cube", position: [-3, 1, -3], rotation: [0.5, 0.5, 0], size: 0.5, color: "#ff9800" },
    { shape: "tetrahedron", position: [3, -1, -3], rotation: [0, 0.5, 0.5], size: 0.6, color: "#e91e63" },
    { shape: "octahedron", position: [-3, -2, -4], rotation: [0.5, 0, 0.5], size: 0.7, color: "#2196f3" },
    { shape: "icosahedron", position: [3, 2, -4], rotation: [0, 0.5, 0], size: 0.8, color: "#9c27b0" },
    { shape: "torus", position: [0, 3, -5], rotation: [0.5, 0, 0], size: 0.6, color: "#f44336" }
  ]
  
  // Binary streams
  const binaryStreams: BinaryStreamProps[] = [
    { position: [-2.5, 0, -2], rotation: [0, 0, 0], color: "#4fc3f7" },
    { position: [2.5, 0, -2], rotation: [0, 0, 0], color: "#81c784" }
  ]
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.2
    }
  })
  
  return (
    <>
      <color attach="background" args={['#000']} />
      
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50}>
        <CameraShake 
          intensity={0.5} 
          maxYaw={0.01}
          maxPitch={0.01} 
          maxRoll={0.01}
        />
      </PerspectiveCamera>
      
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} color="#0070f3" intensity={0.5} />
      
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      
      <ThreeCustomText 
        position={[0, 1.5, 0]} 
        fontSize={0.8}
        color="#ffffff"
        bold={true}
      >
        AMR METWALY
      </ThreeCustomText>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <ThreeCustomText 
          position={[0, 0.5, 0]} 
          fontSize={0.4}
          color="#88ccff"
        >
          PORTFOLIO
        </ThreeCustomText>
      </Float>
      
      <FaviconLoader position={[0, -1.5, 0]} scale={0.8} />
      
      <NeuralNode position={[-3, 2, -2]} color="#0070f3" pulseSpeed={0.8} />
      <NeuralNode position={[-2, -2, -1]} color="#0070f3" pulseSpeed={1.2} />
      <NeuralNode position={[3, 1.5, -3]} color="#00ff88" pulseSpeed={0.9} />
      <NeuralNode position={[2.5, -2, -2]} color="#00ff88" pulseSpeed={1.1} />
      
      <NeuralConnection startPoint={[-3, 2, -2]} endPoint={[-2, -2, -1]} color="#0070f3" />
      <NeuralConnection startPoint={[-2, -2, -1]} endPoint={[2.5, -2, -2]} color="#00aaff" />
      <NeuralConnection startPoint={[2.5, -2, -2]} endPoint={[3, 1.5, -3]} color="#00ff88" />
      <NeuralConnection startPoint={[3, 1.5, -3]} endPoint={[-3, 2, -2]} color="#0022ff" />
      
      <BinaryStream position={[-4, 0, -5]} rotation={[0, 0, Math.PI * 0.25]} length={10} />
      <BinaryStream position={[4, 0, -5]} rotation={[0, 0, -Math.PI * 0.25]} length={10} />
      
      <FloatingShape shape="tetrahedron" position={[-4, 3, -3]} rotation={[0.5, 0.5, 0]} color="#0088ff" />
      <FloatingShape shape="octahedron" position={[4, 3, -3]} rotation={[0.5, 0.5, 0]} color="#00ffaa" />
      <FloatingShape shape="icosahedron" position={[0, -3, -3]} rotation={[0.5, 0.5, 0]} color="#ffffff" />
      
      <CircuitPath
        points={[
          [-5, -5, -5],
          [-5, 5, -5],
          [5, 5, -5],
          [5, -5, -5],
          [-5, -5, -5]
        ]}
        color="#0070f3"
      />
      
      <Environment preset="city" />
    </>
  )
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(true)
  const [visibleText, setVisibleText] = useState("")
  const fullText = "INITIALIZING PORTFOLIO EXPERIENCE"
  
  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 8
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 200)
    
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    // Typewriter effect for loading text
    let currentIndex = 0
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setVisibleText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 50)
    
    return () => clearInterval(typeInterval)
  }, [])
  
  useEffect(() => {
    if (progress === 100) {
      // Delay for a moment when reaching 100%
      const timeout = setTimeout(() => {
        setShow(false)
        // Call onComplete after exit animation finishes
        setTimeout(() => {
          if (onComplete) onComplete()
        }, 1500)
      }, 2000)
      
      return () => clearTimeout(timeout)
    }
  }, [progress, onComplete])
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
        >
          <div className="w-full h-full relative">
            <Canvas>
              <SplashScene />
            </Canvas>
            
            <motion.div
              className="absolute bottom-12 left-0 right-0 mx-auto w-full max-w-md px-4 flex flex-col items-center z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Image 
                  src="/favicon.ico" 
                  width={32} 
                  height={32} 
                  alt="Logo" 
                  className={`mr-3 ${progress < 100 ? 'animate-pulse' : ''}`}
                />
                <div className="text-blue-400 font-mono text-lg font-bold">
                  {visibleText}
                  <span className="animate-pulse">_</span>
                </div>
              </div>
              
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden glow-container w-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-300 to-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="mt-2 text-center text-sm text-blue-400 font-mono">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {progress === 100 ? 
                    "EXPERIENCE READY" : 
                    `LOADING: ${Math.floor(progress)}%`}
                </motion.span>
              </div>
            </motion.div>
          </div>
          
          <style jsx global>{`
            .glow-container {
              box-shadow: 0 0 15px 1px rgba(0, 112, 243, 0.5);
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 