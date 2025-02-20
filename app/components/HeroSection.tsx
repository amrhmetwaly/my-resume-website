"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ThreeDArt = dynamic(() => import('./ThreeDArt'), { ssr: false })

export default function HeroSection() {
    return (
        <section id="home" className="py-20 px-6 text-center relative overflow-hidden min-h-screen flex items-center justify-center">
            <ThreeDArt />
            <div className="relative z-10">
                <h1 className="text-5xl font-bold mb-4 neon-text">Amr H. Metwaly</h1>
                <h2 className="text-3xl mb-6 text-blue-300">Senior Software & QA Engineer</h2>
                <p className="max-w-2xl mx-auto mb-8 text-gray-300">
                    Dynamic Senior Software & QA Engineer with deep-rooted expertise in algorithms, data structures, and system design. I excel in applying core design principles to architect robust, scalable, and distributed systems, leveraging modern software architectures and cloud technologies. My comprehensive approach integrates full-stack development with rigorous hardware/software testing and automation, ensuring every solution is both innovative and reliable.
                </p>
                <div className="flex justify-center space-x-4">
                    <Button variant="outline" asChild className="bg-blue-900 hover:bg-blue-800 text-white hover-scale">
                        <Link href="https://github.com/amrhmetwaly" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                        </Link>
                    </Button>
                    <Button variant="outline" asChild className="bg-green-900 hover:bg-green-800 text-white hover-scale">
                        <Link href="https://linkedin.com/in/amrmetwaly" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </Link>
                    </Button>
                    <Button variant="outline" asChild className="bg-blue-900 hover:bg-blue-800 text-white hover-scale">
                        <Link href="mailto:amr.metwaly1@outlook.com">
                            <Mail className="mr-2 h-4 w-4" /> Email
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}