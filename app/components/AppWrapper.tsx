"use client"

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Safe storage utility to prevent errors
const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      return typeof window !== 'undefined' ? localStorage.getItem(key) : null
    } catch (error) {
      console.warn('Local storage is not available:', error)
      return null
    }
  },
  setItem: (key: string, value: string): boolean => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, value)
        return true
      }
      return false
    } catch (error) {
      console.warn('Local storage is not available:', error)
      return false
    }
  }
}

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
import ErrorBoundary from "./ErrorBoundary"

export default function AppWrapper() {
    const [loading, setLoading] = useState(true)
    
    // No need to check for previous visits anymore since we want the splash screen on every load
    
    const handleSplashComplete = () => {
        setLoading(false)
        // Use safe storage instead of direct localStorage access
        safeStorage.setItem('visited', 'true')
    }
    
    const technologies = [
        "React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide Icons", "Three.js"
    ]
    
    return (
        <ErrorBoundary>
            {loading ? (
                <SplashScreen onComplete={handleSplashComplete} />
            ) : (
                <>
                    <GalaxyBackground />
                    <Navbar />
                    <main className="relative z-10">
                        <HeroSection />
                        <Separator className="my-8 bg-blue-800/30" />
                        <Biography />
                        <Separator className="my-8 bg-blue-800/30" />
                        <Skills />
                        <Separator className="my-8 bg-blue-800/30" />
                        <WorkExperience />
                        <Separator className="my-8 bg-blue-800/30" />
                        <Portfolio />
                        <Separator className="my-8 bg-blue-800/30" />
                        <Awards />
                        <Separator className="my-8 bg-blue-800/30" />
                        <Education />
                        <Separator className="my-8 bg-blue-800/30" />
                        <LinkedInRecommendations />
                        <Separator className="my-8 bg-blue-800/30" />
                        <Contact />
                        <footer className="py-8 text-center text-xs text-gray-500">
                            <p>Built with {technologies.join(", ")}</p>
                        </footer>
                    </main>
                </>
            )}
        </ErrorBoundary>
    )
} 