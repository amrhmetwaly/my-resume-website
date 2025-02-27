"use client"

import { useState } from 'react'
import { Mail, MapPin, Phone, Linkedin, Github, Copy, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Contact() {
    const [copied, setCopied] = useState({
        email: false,
        phone: false
    })

    const copyToClipboard = (text: string, type: 'email' | 'phone') => {
        navigator.clipboard.writeText(text)
        setCopied({ ...copied, [type]: true })
        setTimeout(() => setCopied({ ...copied, [type]: false }), 2000)
    }

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    }

    return (
        <section id="contact" className="relative overflow-hidden py-16">
            {/* Background gradient orbs */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob animation-delay-4000"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                    }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-300 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                        Feel free to reach out for opportunities, collaborations or just to say hello!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Info Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        variants={fadeIn}
                        className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-all duration-300"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-blue-300">Contact Information</h3>
                        
                        <div className="space-y-5">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-blue-900/50 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-blue-300" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-blue-200">Email</p>
                                    <div className="mt-1 flex items-center">
                                        <p className="text-white">amr.metwaly1@outlook.com</p>
                                        <button 
                                            onClick={() => copyToClipboard('amr.metwaly1@outlook.com', 'email')} 
                                            className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                                            aria-label="Copy email address"
                                        >
                                            {copied.email ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-green-900/50 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-green-300" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-green-200">Phone</p>
                                    <div className="mt-1 flex items-center">
                                        <p className="text-white">+1316-941-6699</p>
                                        <button 
                                            onClick={() => copyToClipboard('+13169416699', 'phone')} 
                                            className="ml-2 text-green-400 hover:text-green-300 transition-colors"
                                            aria-label="Copy phone number"
                                        >
                                            {copied.phone ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-purple-900/50 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-purple-300" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-purple-200">Location</p>
                                    <p className="text-white mt-1">Hillsboro, OR, USA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* Social Links */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        variants={fadeIn}
                        className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-all duration-300"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-blue-300">Connect With Me</h3>
                        
                        <div className="grid grid-cols-1 gap-4">
                            <Button asChild variant="outline" className="bg-blue-900/30 hover:bg-blue-800/50 text-white hover:scale-105 transition-all duration-300 border border-blue-500/50 backdrop-blur-sm group h-14">
                                <Link href="mailto:amr.metwaly1@outlook.com" className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <Mail className="mr-2 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                        <span>Email Me</span>
                                    </div>
                                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </Link>
                            </Button>
                            
                            <Button asChild variant="outline" className="bg-green-900/30 hover:bg-green-800/50 text-white hover:scale-105 transition-all duration-300 border border-green-500/50 backdrop-blur-sm group h-14">
                                <Link href="https://linkedin.com/in/amrmetwaly" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <Linkedin className="mr-2 h-5 w-5 text-green-400 group-hover:text-green-300 transition-colors" />
                                        <span>LinkedIn</span>
                                    </div>
                                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </Link>
                            </Button>
                            
                            <Button asChild variant="outline" className="bg-purple-900/30 hover:bg-purple-800/50 text-white hover:scale-105 transition-all duration-300 border border-purple-500/50 backdrop-blur-sm group h-14">
                                <Link href="https://github.com/amrhmetwaly" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <Github className="mr-2 h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                                        <span>GitHub</span>
                                    </div>
                                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
                
                {/* Additional Prompt */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    variants={fadeIn}
                    className="text-center mt-12 max-w-2xl mx-auto"
                >
                    <div className="p-6 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-blue-500/20">
                        <p className="text-blue-200">
                            Looking forward to connecting with you! You can reach out directly through email or social links above.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}