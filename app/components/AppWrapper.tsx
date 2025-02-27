"use client"

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the SplashScreen to avoid SSR issues
const SplashScreen = dynamic(() => import('./SplashScreen'), { ssr: false })

// Import all the main components
import GalaxyBackground from './GalaxyBackground'
import HeroSection from './HeroSection'
import Biography from './Biography'
import Skills from './Skills'
import WorkExperience from './WorkExperience'
import Portfolio from './Portfolio'
import Awards from './Awards'
import Education from './Education'
import Contact from './Contact'
import LinkedInRecommendations from './LinkedInRecommendations'
import { Separator } from "@/components/ui/separator"
import Navbar from "./Navbar"

export default function AppWrapper() {
    const [loading, setLoading] = useState(true)
    
    // No need to check for previous visits anymore since we want the splash screen on every load
    
    const handleSplashComplete = () => {
        setLoading(false)
        // Remove localStorage setting to ensure splash screen shows every time
    }
    
    const technologies = [
        "React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide Icons", "Three.js"
    ]
    
    return (
        <>
            {loading ? (
                <SplashScreen onComplete={handleSplashComplete} />
            ) : (
                <div className="min-h-screen text-white">
                    <Navbar />
                    <GalaxyBackground />
                    <HeroSection />
                    <main className="container mx-auto px-6 py-12 max-w-5xl">
                        <Biography />
                        <Skills />
                        <WorkExperience />
                        <Portfolio />
                        <Awards />
                        <LinkedInRecommendations />
                        <Education />
                        <Contact />
                    </main>
                    <footer className="py-6 text-center text-gray-300 bg-black/50 backdrop-blur-sm">
                        <Separator className="mb-6" />
                        <p className="mb-4">&copy; 2025 Amr H. Metwaly. All rights reserved.</p>
                        <div>
                            <p className="text-sm mb-2">Technologies used in this portfolio:</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </footer>
                </div>
            )}
        </>
    )
} 