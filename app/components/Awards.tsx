import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { Trophy, Medal, Award, Star, ChevronDown } from "lucide-react";

export default function Awards() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const [expandedAward, setExpandedAward] = useState<number | null>(null);
    
    // Categories for filtering
    const categories = [
        { id: "all", name: "All Awards", icon: Trophy },
        { id: "academic", name: "Academic", icon: Medal },
        { id: "athletic", name: "Athletic", icon: Award },
        { id: "technical", name: "Technical", icon: Star },
    ];
    
    // Award data with categories
    const awards = [
        {
            title: "Don and Lee Wadsworth Walk On Student Athlete Scholarship",
            year: "2017-2018",
            image: "/images/awards/scholarships.png",
            category: "athletic",
            description: "Prestigious scholarship awarded to student athletes who demonstrate exceptional performance and dedication."
        },
        {
            title: "TechMidwest 2017 Hackathon 1st Place",
            year: "2017",
            description: "Awarded first place for developing an innovative cryptocurrency trading bot at the TechMidwest Hackathon competition.",
            image: "/images/awards/Hackathon.png",
            category: "technical"
        },
        {
            title: "Upper 30% of Class",
            year: "2015-2020",
            description: "Consistently maintained academic performance in the top 30% of the graduating class throughout the entire program.",
            image: "/images/awards/001-diploma.png",
            category: "academic"
        },
        {
            title: "All American 2nd Academic Team",
            description: "Recognized by the American Collegiate Rowing Association (ACRA) for outstanding academic achievement while participating in collegiate rowing.",
            year: "2017",
            image: "/images/awards/005-interface.png",
            category: "academic"
        },
        {
            title: "Dean's Honor Roll",
            description: "Recognized for academic excellence with placement on the Dean's Honor Roll, maintaining a GPA above 3.5.",
            year: "2015-2018",
            image: "/images/awards/004-cup.png",
            category: "academic"
        },
        {
            title: "Nominated for Co-operative Education Student of the Year",
            year: "2017",
            description: "Selected as a nominee for this prestigious award recognizing outstanding performance and contributions during cooperative education placement.",
            image: "/images/awards/006-people.png",
            category: "academic"
        },
        {
            title: "Iron Oar Award",
            description: "Awarded by Wichita State University Crew for demonstrating exceptional dedication, resilience, and leadership in rowing.",
            year: "2016-2017",
            image: "/images/awards/005-rowing-1.png",
            category: "athletic"
        },
        {
            title: "Wichita State Varsity Crew Scholarship",
            year: "2016-2017",
            description: "Merit-based scholarship awarded for outstanding performance and commitment to the university rowing team.",
            image: "/images/awards/006-rowing.png",
            category: "athletic"
        }
    ];
    
    // Handle mouse move for glow effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);
    
    // Filter awards based on active category
    const filteredAwards = activeCategory === "all" 
        ? awards 
        : awards.filter(award => award.category === activeCategory);
        
    // Toggle award details
    const toggleAward = (index: number) => {
        setExpandedAward(expandedAward === index ? null : index);
    };

    return (
        <section 
            id="awards" 
            className="relative mb-12 rounded-xl overflow-hidden"
            ref={containerRef}
        >
            {/* Glow effect */}
            <div 
                className="absolute pointer-events-none"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(57, 255, 20, 0.15) 0%, rgba(57, 255, 20, 0) 70%)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '1',
                }}
            />
            
            {/* Main container */}
            <div className="relative z-10 bg-gradient-to-br from-gray-900/90 to-gray-800/30 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-green-500/20">
                {/* Header with animated lines */}
                <div className="mb-10 relative">
                    <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gradient-to-r from-transparent to-green-500/70"></div>
                    <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 py-2">
                        Honors & Awards
                    </h3>
                    <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gradient-to-l from-transparent to-green-500/70"></div>
                </div>
                
                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <motion.button
                                key={category.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(category.id)}
                                className={`
                                    flex items-center gap-2 px-4 py-2 rounded-full 
                                    transition-all duration-300 
                                    ${activeCategory === category.id 
                                        ? 'bg-green-500/30 text-green-300 border-green-400 shadow-lg shadow-green-900/30' 
                                        : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-green-400'}
                                    border
                                `}
                            >
                                <Icon size={16} />
                                <span>{category.name}</span>
                            </motion.button>
                        );
                    })}
                </div>
                
                {/* Awards grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="wait">
                        {filteredAwards.map((award, index) => (
                            <motion.div
                                key={`${award.title}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ 
                                    duration: 0.3, 
                                    delay: index * 0.1,
                                    type: "spring",
                                }}
                                className={`
                                    relative overflow-hidden
                                    bg-gradient-to-br from-gray-800/80 to-gray-900/80 
                                    rounded-xl border border-green-500/20
                                    transition-all duration-500 ease-in-out
                                    ${expandedAward === index ? 'shadow-xl shadow-green-500/10' : 'hover:shadow-lg hover:shadow-green-500/5'}
                                    cursor-pointer
                                `}
                                onClick={() => toggleAward(index)}
                            >
                                <div className="p-6">
                                    {/* Award image with glow */}
                                    <div className="relative w-16 h-16 mb-4 mx-auto group">
                                        <div className={`
                                            absolute inset-0 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300
                                            ${award.category === 'academic' && 'bg-blue-500/50'} 
                                            ${award.category === 'athletic' && 'bg-purple-500/50'} 
                                            ${award.category === 'technical' && 'bg-amber-500/50'}
                                        `}></div>
                                        <div className="relative z-10 w-16 h-16">
                                            <Image 
                                                src={award.image} 
                                                alt={award.title} 
                                                width={64} 
                                                height={64} 
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Award content */}
                                    <div className="text-center">
                                        <h4 className="font-bold text-green-400 mb-1">{award.title}</h4>
                                        <p className="text-sm text-green-300/80">{award.year}</p>
                                    </div>
                                    
                                    {/* Expandable content */}
                                    <AnimatePresence>
                                        {expandedAward === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-4 overflow-hidden"
                                            >
                                                <p className="text-sm text-gray-300 leading-relaxed">{award.description}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    
                                    {/* Show more indicator */}
                                    <div className="flex justify-center mt-3">
                                        <motion.div
                                            animate={{ rotate: expandedAward === index ? 180 : 0 }}
                                            className={`rounded-full p-1 transition-colors duration-300 ${expandedAward === index ? 'bg-green-500/30' : 'bg-gray-800'}`}
                                        >
                                            <ChevronDown size={16} className="text-green-400" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                
                {filteredAwards.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-10"
                    >
                        <p className="text-gray-400">No awards found in this category.</p>
                    </motion.div>
                )}
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/3 right-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
            </div>
        </section>
    );
}