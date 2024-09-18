"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Awards', href: '#awards' },
    { name: 'Praise', href: '#recommendations' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100 // Add some offset
            const sections = navItems.map(item => ({
                name: item.name.toLowerCase(),
                element: document.querySelector(item.href) as HTMLElement
            })).filter(item => item.element !== null)

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section.element && scrollPosition >= section.element.offsetTop) {
                    setActiveSection(section.name)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Call once to set initial active section
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false)
        const element = document.querySelector(href)
        if (element) {
            const navbarHeight = 64 // Adjust this value based on your navbar height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navbarHeight

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:block w-full">
                        <div ref={navRef} className="flex items-center justify-center space-x-4 relative">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium relative"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleNavClick(item.href)
                                    }}
                                >
                                    {item.name}
                                    {activeSection === item.name.toLowerCase() && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                                            layoutId="underline"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            style={{
                                                width: '100%',
                                            }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden flex justify-end w-full">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleNavClick(item.href)
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}