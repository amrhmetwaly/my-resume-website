import React, { useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

export default function Education() {
    const [expandedDetails, setExpandedDetails] = useState(false);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const glowVariants = {
        idle: { 
            boxShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)' 
        },
        hover: { 
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.6), 0 0 45px rgba(0, 255, 255, 0.4)' 
        }
    };

    return (
        <section id="education" className="mb-12 p-8 rounded-lg backdrop-blur-sm relative overflow-hidden">
            {/* Background gradient elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            {/* Animated header with neon effect */}
            <motion.h2 
                className="text-3xl font-bold mb-8 relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 text-4xl">
                    Education
                </span>
                <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.span>
            </motion.h2>

            {/* Education card with glow effect */}
            <motion.div
                className="relative"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="rounded-xl bg-gradient-to-r p-[2px] from-cyan-500 via-purple-500 to-cyan-500 bg-size-200 animate-gradient-x"
                    variants={itemVariants}
                    whileHover="hover"
                    initial="idle"
                >
                    <motion.div 
                        className="flex flex-col md:flex-row items-center h-full w-full bg-gray-900 backdrop-blur-lg rounded-lg p-6"
                        variants={glowVariants}
                        whileHover="hover"
                        initial="idle"
                    >
                        {/* University logo with animated interaction */}
                        <motion.div 
                            className="relative flex-shrink-0 mb-6 md:mb-0 md:mr-8"
                            whileHover={{ scale: 1.05, rotate: 5 }}
                        >
                            <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-2 border-cyan-400 p-1">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-30 rounded-full animate-pulse"></div>
                                <Image
                                    src="/images/wushock-mascot.png"
                                    alt="WuShock Mascot"
                                    width={128}
                                    height={128}
                                    className="rounded-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Education details */}
                        <div className="flex-grow">
                            <motion.h3 
                                className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                                variants={itemVariants}
                            >
                                Bachelor of Science in Computer Engineering
                            </motion.h3>
                            
                            <motion.div 
                                className="flex items-center mb-3"
                                variants={itemVariants}
                            >
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-cyan-500 text-white mr-2">
                                    Cum Laude
                                </span>
                                <span className="text-gray-300 text-sm">GPA: 3.5/4.00</span>
                            </motion.div>
                            
                            <motion.p 
                                className="text-gray-300 mb-4 flex items-center"
                                variants={itemVariants}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Wichita State University, Wichita, KS, USA
                            </motion.p>
                            
                            <motion.p 
                                className="text-gray-300 mb-4 flex items-center"
                                variants={itemVariants}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Graduated: May 2020
                            </motion.p>

                            {/* Expandable course details */}
                            <motion.div variants={itemVariants}>
                                <motion.button
                                    onClick={() => setExpandedDetails(!expandedDetails)}
                                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>{expandedDetails ? "Hide" : "View"} notable coursework</span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className={`h-5 w-5 ml-1 transition-transform duration-300 ${expandedDetails ? 'rotate-180' : ''}`} 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.button>
                                
                                <AnimatePresence>
                                    {expandedDetails && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-4 pt-4 border-t border-gray-700"
                                        >
                                            <h4 className="text-gray-200 font-medium mb-2">Notable Coursework:</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {[
                                                    "Advanced Computer Networks",
                                                    "Software Engineering",
                                                    "Computer Architecture",
                                                    "Data Structures & Algorithms",
                                                    "Operating Systems",
                                                    "Embedded Systems",
                                                    "Digital Signal Processing",
                                                    "Computer Security"
                                                ].map((course, index) => (
                                                    <motion.div 
                                                        key={index}
                                                        className="flex items-center text-gray-300"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                    >
                                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mr-2"></span>
                                                        {course}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}