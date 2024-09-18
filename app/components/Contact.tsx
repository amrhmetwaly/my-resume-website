"use client"

import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Contact() {
    return (
        <section id="contact" className="bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm gradient-border">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Contact Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                        <Mail className="mr-2 h-4 w-4 text-blue-400" />
                        <span>amr.metwaly1@outlook.com</span>
                    </div>
                    <div className="flex items-center">
                        <Phone className="mr-2 h-4 w-4 text-blue-400" />
                        <span>+1316-941-6699</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4 text-blue-400" />
                        <span>Hillsboro, OR, USA</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <Button variant="outline" asChild className="bg-blue-900 hover:bg-blue-800 text-white hover-scale">
                        <Link href="mailto:amr.metwaly1@outlook.com">
                            <Mail className="mr-2 h-4 w-4" /> Email Me
                        </Link>
                    </Button>
                    <Button variant="outline" asChild className="bg-blue-900 hover:bg-blue-800 text-white hover-scale">
                        <Link href="https://linkedin.com/in/amrmetwaly" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
                        </Link>
                    </Button>
                    <Button variant="outline" asChild className="bg-green-900 hover:bg-green-800 text-white hover-scale">
                        <Link href="https://github.com/amrhmetwaly" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Follow on GitHub
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}