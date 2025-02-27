import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Biography() {
    const [activeTab, setActiveTab] = useState('professional');
    
    const tabVariants = {
        inactive: { 
            opacity: 0.7,
            scale: 0.95,
            y: 0
        },
        active: { 
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        }
    };
    
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="relative mb-12 py-12 px-6 overflow-hidden rounded-xl">
            {/* Background with animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)]"></div>
            </div>
            
            {/* Glowing border */}
            <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 opacity-70 blur-[2px]"></div>
            
            <div className="relative z-10">
                {/* Section header with animation */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 neon-text">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                </motion.div>

                {/* Tab navigation */}
                <div className="flex justify-center gap-4 mb-8">
                    {[
                        { id: 'professional', label: 'Professional' },
                        { id: 'personal', label: 'Personal' },
                        { id: 'philosophy', label: 'Philosophy' }
                    ].map((tab) => (
                        <motion.button
                            key={tab.id}
                            variants={tabVariants}
                            initial="inactive"
                            animate={activeTab === tab.id ? "active" : "inactive"}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-lg font-medium ${
                                activeTab === tab.id 
                                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-500/50 shadow-[0_0_15px_rgba(0,255,255,0.5)]' 
                                    : 'text-gray-300 hover:text-white border border-transparent'
                            } transition-all duration-300`}
                        >
                            {tab.label}
                        </motion.button>
                    ))}
                </div>

                {/* Content area with animation */}
                <motion.div 
                    key={activeTab}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto"
                >
                    {activeTab === 'professional' && (
                        <div className="space-y-6">
                            <div className="bg-black/40 backdrop-blur-sm p-5 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Software Engineering Expertise</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    I am a seasoned software engineering and quality assurance professional with a deep foundation in computer science fundamentals and a proven track record at premier organizations. My expertise spans algorithms, data structures, design principles, distributed systems, and comprehensive system design, empowering me to build robust, scalable solutions tailored to today's complex challenges.
                                </p>
                            </div>
                            
                            <div className="bg-black/40 backdrop-blur-sm p-5 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,255,0.2)]">
                                <h3 className="text-xl font-semibold mb-3 text-blue-400">Freelance Experience</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    As a freelance tech ninja, I have spearheaded diverse projects by delivering innovative, custom-built solutions that perfectly align with my clients' unique requirements. Whether it's architecting full-stack systems, implementing cutting-edge automation frameworks, or optimizing performance with advanced algorithms, I thrive in fast-paced, agile environments where creativity and precision intersect.
                                </p>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'personal' && (
                        <div className="space-y-6">
                            <div className="bg-black/40 backdrop-blur-sm p-5 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(128,0,255,0.2)]">
                                <h3 className="text-xl font-semibold mb-3 text-purple-400">Beyond Coding</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    When I'm not crafting elegant code solutions, you might find me exploring the latest technologies, contributing to open-source projects, or mentoring aspiring developers. I'm passionate about the intersection of technology and creative problem-solving, constantly seeking new challenges that push the boundaries of what's possible.
                                </p>
                            </div>
                            
                            <div className="bg-black/40 backdrop-blur-sm p-5 rounded-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,128,0.2)]">
                                <h3 className="text-xl font-semibold mb-3 text-pink-400">Continuous Learning</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    I believe in lifelong learning and regularly dedicate time to expand my knowledge through courses, technical literature, and hands-on experimentation. This commitment to growth ensures I stay at the cutting edge of technological advancement, ready to apply innovative solutions to complex problems.
                                </p>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'philosophy' && (
                        <div className="space-y-6">
                            <div className="bg-black/40 backdrop-blur-sm p-5 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,128,0.2)]">
                                <h3 className="text-xl font-semibold mb-3 text-green-400">Technical Excellence</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    I believe that exceptional software is built on a foundation of technical excellence, meticulous attention to detail, and a deep understanding of user needs. My approach combines robust architecture with elegant implementation, ensuring solutions that are not only functionally superior but also maintainable and adaptable to evolving requirements.
                                </p>
                            </div>
                            
                            <div className="bg-black/40 backdrop-blur-sm p-5 rounded-lg border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,0,0.2)]">
                                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Collaborative Spirit</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Driven by a passion for impactful leadership and collaborative innovation, I thrive in environments where diverse perspectives converge to create breakthrough solutions. I am always eager to connect with like-minded professionals for idea exchange, shared experiences, and collaborations that push the boundaries of technology and create meaningful impact.
                                </p>
                            </div>
                        </div>
                    )}
                </motion.div>
                
                {/* Interactive element - moving particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-cyan-500/70"
                            initial={{ 
                                x: Math.random() * 100 + "%", 
                                y: Math.random() * 100 + "%", 
                                opacity: Math.random() * 0.5 + 0.3,
                                scale: Math.random() * 1 + 0.5
                            }}
                            animate={{ 
                                x: Math.random() * 100 + "%", 
                                y: Math.random() * 100 + "%",
                                opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.3],
                                scale: [Math.random() + 0.5, Math.random() * 2 + 1, Math.random() + 0.5]
                            }}
                            transition={{ 
                                duration: Math.random() * 10 + 15, 
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}