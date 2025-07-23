"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Code, Server, Database, ChevronDown } from "lucide-react"
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const ThreeDArt = dynamic(() => import('./ThreeDArt'), { ssr: false })

export default function HeroSection() {
    const contentSectionRef = useRef<HTMLDivElement>(null);
    
    const scrollToContent = () => {
        contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <section id="home" className="relative flex flex-col items-center overflow-hidden">
            {/* Full height 3D art container - now without any overlaid content */}
            <div className="w-full h-screen relative flex items-center justify-center overflow-hidden">
                {/* 3D Background */}
                <div className="absolute inset-0 z-0">
                    <ThreeDArt />
                </div>
                
                {/* Desktop scroll indicator */}
                <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
                    onClick={scrollToContent}
                    aria-label="Scroll to content"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && scrollToContent()}
                >
                    <div className="w-8 h-12 border-2 border-blue-400 rounded-full flex justify-center hover:border-blue-300 hover:scale-105 transition-all">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse" />
                    </div>
                </motion.div>

                {/* Mobile scroll arrow - more prominent and with adaptive positioning */}
                <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center md:hidden cursor-pointer z-10"
                    style={{ bottom: 'max(8vh, 3rem)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
                    onClick={scrollToContent}
                    aria-label="Scroll to content"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && scrollToContent()}
                >
                    <p className="text-blue-300 mb-2 text-sm font-medium">Scroll Down</p>
                    <div className="p-2 bg-blue-500/30 backdrop-blur-sm rounded-full border border-blue-400/50 shadow-lg shadow-blue-500/20 hover:bg-blue-500/40 hover:scale-110 active:scale-95 transition-all">
                        <ChevronDown className="h-6 w-6 text-blue-300" />
                    </div>
                </motion.div>
            </div>
            
            {/* Name and contact section - now moved below the 3D art */}
            <div ref={contentSectionRef} className="w-full bg-gradient-to-b from-gray-900/95 to-blue-900/90 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Name and title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-7xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-300 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                            Amr H. Metwaly
                        </h1>
                        <h2 className="text-3xl mb-8 text-blue-300 font-light drop-shadow-[0_0_10px_rgba(60,130,246,0.5)]">
                            Senior Software & QA Engineer
                        </h2>
                        
                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center gap-4 flex-wrap mt-8"
                        >
                            <Button variant="outline" asChild className="bg-blue-900/30 hover:bg-blue-800/50 text-white hover:scale-105 transition-all border border-blue-500/50 backdrop-blur-sm">
                                <Link href="https://github.com/amrhmetwaly" target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                </Link>
                            </Button>
                            <Button variant="outline" asChild className="bg-green-900/30 hover:bg-green-800/50 text-white hover:scale-105 transition-all border border-green-500/50 backdrop-blur-sm">
                                <Link href="https://linkedin.com/in/amrmetwaly" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                </Link>
                            </Button>
                            <Button variant="outline" asChild className="bg-blue-900/30 hover:bg-blue-800/50 text-white hover:scale-105 transition-all border border-blue-500/50 backdrop-blur-sm">
                                <Link href="mailto:amr.metwaly1@outlook.com">
                                    <Mail className="mr-2 h-4 w-4" /> Email
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                    
                    {/* Skills section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
                    >
                        <div className="flex flex-col items-center p-6 bg-blue-900/20 rounded-lg hover:bg-blue-900/30 transition-all border border-blue-500/20 shadow-lg hover:shadow-blue-500/20 group">
                            <Code className="w-12 h-12 text-green-400 mb-4 group-hover:text-green-300 transition-colors" />
                            <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200">Full-Stack Development</h3>
                            <p className="text-gray-300 text-center mt-3">Building modern, responsive applications with cutting-edge technologies</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-blue-900/20 rounded-lg hover:bg-blue-900/30 transition-all border border-blue-500/20 shadow-lg hover:shadow-blue-500/20 group">
                            <Server className="w-12 h-12 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                            <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200">System Architecture</h3>
                            <p className="text-gray-300 text-center mt-3">Designing scalable, distributed systems with modern software architectures</p>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-blue-900/20 rounded-lg hover:bg-blue-900/30 transition-all border border-blue-500/20 shadow-lg hover:shadow-blue-500/20 group">
                            <Database className="w-12 h-12 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                            <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200">QA & Testing</h3>
                            <p className="text-gray-300 text-center mt-3">Ensuring robust, reliable solutions through comprehensive testing automation</p>
                        </div>
                    </motion.div>
                    
                    {/* Bio section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p className="text-gray-300 text-center text-lg leading-relaxed max-w-3xl mx-auto bg-blue-900/10 p-6 rounded-lg border border-blue-500/20 shadow-lg">
                            Dynamic Senior Software & QA Engineer with deep-rooted expertise in algorithms, data structures, and system design. 
                            I excel in applying core design principles to architect robust, scalable, and distributed systems, 
                            leveraging modern software architectures and cloud technologies.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}