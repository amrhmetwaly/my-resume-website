import React, { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState("");
    const [hoveredSkill, setHoveredSkill] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showAIAssistant, setShowAIAssistant] = useState(false);
    
    const skillCategories = [
        {
            name: "Programming Languages",
            icon: "💻",
            skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Golang", "C++", "C", "Perl", "NodeJS", "PHP"]
        },
        {
            name: "Web & Mobile Technologies",
            icon: "🌐",
            skills: ["React", "React Native", "Flutter", "NextJS", , "Remix", "Angular", "VueJS", "Svelte", "HTML5", "CSS3", "Ajax", "Bootstrap", "XML", "JSON", "GWT", "Apache Tomcat"]
        },
        {
            name: "Databases",
            icon: "🗄️",
            skills: ["MySQL", "SQLite", "MongoDB", "PostgreSQL", "Redis", "Memcached", "DynamoDB", "Firebase", "Supabase"]
        },
        {
            name: "AI & Machine Learning",
            icon: "🤖",
            skills: ["OpenAI", "LLMs", "Grok", "Gemini", "Claude", "RAG", "LangChain", "LangGraph", "LangGraph", "LangFlow"]
        },
        {
            name: "DevOps & Cloud",
            icon: "☁️",
            skills: ["Git", "Azure DevOps", "CI/CD", "Jenkins", "Docker", "Kubernetes", "Azure", "Google Cloud", "Firebase", "Terraform", "Perforce", "Mercurial"]
        },
        {
            name: "Testing & QA",
            icon: "🧪",
            skills: ["Jest", "Cypress", "Playwright", "Pytest", "Selenium", "qTest", "Test Automation", "Performance Testing", "Regression Testing", "Stress Testing", "System Testing", "Exploratory Testing", "Root Cause Analysis", "Interoperability Testing"]
        },
        {
            name: "Networking",
            icon: "🔌",
            skills: ["L2/3 Networks", "SDN", "OpenFlow", "Mininet", "Wireshark", "Switch Zoning", "Network Configuration"]
        },
        {
            name: "Security",
            icon: "🔒",
            skills: ["Product Security Enhancement", "Security Development Lifecycle (SDL)", "Secure Coding Practices", "TLS"]
        },
        {
            name: "Operating Systems",
            icon: "🖥️",
            skills: ["Linux (RHEL, SUSE, CentOS, Debian, Ubuntu, UEK)", "macOS", "Windows", "Windows Server", "Element OS"]
        },
        {
            name: "Storage Systems",
            icon: "💾",
            skills: ["NetApp SolidFire", "NetApp E-series", "EF-series", "SANtricity Storage Manager", "SAN Environments", "iSCSI", "FCoE", "FC", "IB", "SAS"]
        },
        {
            name: "Virtualization",
            icon: "📊",
            skills: ["VMware", "Cloud Computing", "Virtual Testbeds"]
        },
        {
            name: "Project Management",
            icon: "📋",
            skills: ["JIRA", "Confluence", "GitLab", "Azure DevOps", "Agile", "Scrum", "Kanban", "XP", "SAFe", "Requirements Analysis", "User Story Analysis"]
        },
        {
            name: "Documentation",
            icon: "📝",
            skills: ["Root Cause Analysis", "Troubleshooting", "Technical Writing", "Markdown", "Product Documentation"]
        },
        {
            name: "Scripting",
            icon: "📜",
            skills: ["Bash", "PowerShell", "Shell Scripting", "Python Scripting"]
        },
        {
            name: "Software Engineering",
            icon: "⚙️",
            skills: ["UML", "SDLC", "OOP", "Data Structures", "Algorithms", "System Design", "Microservices", "Distributed Systems", "Full Stack Development", "Frontend Development", "Backend Development"]
        },
        {
            name: "IDEs & Tools",
            icon: "🔧",
            skills: ["VS Code", "Visual Studio", "Cursor", "PyCharm", "Eclipse", "Vim"]
        },
        {
            name: "Other",
            icon: "🔍",
            skills: ["Microsoft Office", "Interoperability Testing", "Element OS", "Active IQ", "Lab Maintenance", "Hardware Configuration"]
        }
    ];

    // Set the first category as active initially
    useEffect(() => {
        if (skillCategories.length > 0 && activeCategory === "") {
            setActiveCategory(skillCategories[0].name);
        }
    }, []);

    // Handle mouse move for the AI glow effect
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

    // Simulate AI assistant
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAIAssistant(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Get active category skills
    const activeSkills = skillCategories.find(cat => cat.name === activeCategory)?.skills || [];
    
    // Get the active category icon
    const activeIcon = skillCategories.find(cat => cat.name === activeCategory)?.icon || "";

    return (
        <section 
            id="skills" 
            className="relative mb-12 bg-gradient-to-br from-gray-900/90 to-gray-800/30 p-8 rounded-xl backdrop-blur-lg shadow-2xl overflow-hidden"
            ref={containerRef}
        >
            {/* AI Glow Effect */}
            <div 
                className="absolute pointer-events-none"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(57, 255, 20, 0.15) 0%, rgba(57, 255, 20, 0) 70%)',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '1',
                }}
            />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                        Skills & Expertise
                    </h3>
                    
                    {/* AI Assistant */}
                    <AnimatePresence>
                        {showAIAssistant && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="flex items-center bg-green-500/10 px-4 py-2 rounded-full"
                            >
                                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                                <span className="text-sm text-green-300">
                                    {hoveredSkill ? `You're viewing: ${hoveredSkill}` : 'Hover over a skill to learn more'}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Category Selection */}
                <div className="mb-8 overflow-x-auto pb-2">
                    <div className="flex space-x-2 min-w-max">
                        {skillCategories.map((category) => (
                            <motion.button
                                key={category.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(category.name)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                                    activeCategory === category.name
                                        ? "bg-green-600 text-white shadow-lg shadow-green-500/20"
                                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                                }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Skills Display */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-800/30 p-6 rounded-xl border border-green-500/20"
                    >
                        <div className="flex items-center mb-4">
                            <span className="text-3xl mr-3">{activeIcon}</span>
                            <h4 className="text-xl font-semibold text-green-300">{activeCategory}</h4>
                        </div>
                        
                        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <AnimatePresence mode="wait">
                                {activeSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill || index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ 
                                            duration: 0.3, 
                                            delay: index * 0.05,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                    >
                                        <Badge 
                                            variant="secondary" 
                                            className={`
                                                w-full text-center justify-center py-2 px-3 
                                                bg-gradient-to-r from-gray-800/60 to-gray-700/60
                                                hover:from-green-900/40 hover:to-emerald-900/40
                                                border border-green-500/30
                                                text-white text-sm cursor-pointer
                                                transition-all duration-300 transform
                                                ${hoveredSkill === skill ? 'ring-2 ring-green-400 scale-105' : ''}
                                            `}
                                            onMouseEnter={() => skill && setHoveredSkill(skill)}
                                            onMouseLeave={() => setHoveredSkill("")}
                                        >
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-green-500/10 rounded-full blur-xl" />
                    <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl" />
                </div>
            </div>
        </section>
    )
}