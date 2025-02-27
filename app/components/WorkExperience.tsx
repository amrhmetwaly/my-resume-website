"use client"

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Building2, Code, Cpu, Server, Globe, Terminal, Award } from 'lucide-react';
import { TypewriterEffect } from './TypewriterEffect';

// Define interfaces for better type safety
interface WorkDetail {
    text: string;
    keywords?: string[];
}

interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    details: string[];
    logo?: string;
    skills?: string[];
    color?: string;
    icon?: string;
}

export default function WorkExperience() {
    const [activeExperience, setActiveExperience] = useState<number | null>(null);
    const [prevActiveExp, setPrevActiveExp] = useState<number | null>(null);
    const [animatingOut, setAnimatingOut] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });

    // Company-specific colors for visual identity
    const companyColors = {
        "Freelancer.com": "from-green-500/30 to-blue-500/30 border-green-400/40",
        "Intel Corporation": "from-blue-600/30 to-blue-800/30 border-blue-500/40",
        "Keysight Technologies": "from-red-500/30 to-red-800/30 border-red-500/40",
        "NetApp (SolidFire)": "from-indigo-500/30 to-indigo-800/30 border-indigo-500/40",
        "NetApp (E-Series)": "from-purple-500/30 to-purple-800/30 border-purple-500/40"
    };

    // Get an icon component based on company name
    const getCompanyIcon = (company: string) => {
        switch(company) {
            case "Freelancer.com":
                return <Globe className="w-8 h-8 text-green-400" />;
            case "Intel Corporation":
                return <Cpu className="w-8 h-8 text-blue-400" />;
            case "Keysight Technologies":
                return <Terminal className="w-8 h-8 text-red-400" />;
            case "NetApp (SolidFire)":
            case "NetApp (E-Series)":
                return <Server className="w-8 h-8 text-indigo-400" />;
            default:
                return <Building2 className="w-8 h-8 text-blue-400" />;
        }
    };

    const getCompanyColor = (company: string) => {
        return companyColors[company as keyof typeof companyColors] || "from-blue-500/30 to-blue-900/30 border-blue-500/40";
    };

    // Handle smooth transitions between experiences
    useEffect(() => {
        if (activeExperience !== null && prevActiveExp !== activeExperience) {
            setPrevActiveExp(activeExperience);
        }
    }, [activeExperience, prevActiveExp]);

    const handleExperienceClick = (index: number) => {
        if (activeExperience === index) {
            setAnimatingOut(true);
            setTimeout(() => {
                setActiveExperience(null);
                setAnimatingOut(false);
            }, 300);
        } else {
            setAnimatingOut(true);
            setTimeout(() => {
                setActiveExperience(index);
                setAnimatingOut(false);
            }, 300);
        }
    };

    // Clean up any potential undefined text in details
    const sanitizeDetails = (details: string[]) => {
        return details.map(detail => 
            detail.endsWith('undefined') 
                ? detail.replace(/undefined$/, '') 
                : detail
        );
    };

    const experiences: Experience[] = [
        {
            title: "Freelance Full-Stack Software Engineer & Consultant",
            company: "Freelancer.com",
            location: "Remote, USA",
            period: "July 2024 – Present",
            icon: "Globe",
            skills: ["React Native", "Expo", "Next.js", "Node.js", "NestJS", "Golang", "Docker", "K8s", "AWS"],
            details: [
                "Hangouty Mobile App: Spearheaded the end-to-end development of Hangouty, a cross-platform mobile application that facilitates spontaneous social meetups. Leveraged React Native and Expo to build a smooth, intuitive UI, integrated real-time notifications and analytics via a Golang RestAPI running in a docker container and orchestrated by K8s on AWS, and implemented rigorous testing protocols to ensure robust performance and security.",
                "Webpage Commenter Chrome Extension: Engineered a feature-rich Chrome extension enabling users to annotate and comment directly on webpages. Utilized modern JavaScript frameworks and the Chrome Extensions API to craft a responsive, user-friendly interface, while incorporating end-to-end testing with Jest and Cypress to maintain high-quality code standards.",
                "Bespoke Client Projects: Delivered multiple custom web and mobile solutions across diverse industries, including enterprise dashboards and collaborative platforms. Employed full-stack technologies such as Next.js, Node.js, and NestJS for scalable backend integrations, and adopted agile methodologies to iterate rapidly based on stakeholder feedback.",
                "DevOps & Automation Enhancements: Automated build, testing, and deployment workflows using Jenkins and GitHub Actions, significantly reducing time-to-market. Designed comprehensive test suites with Jest, Cypress, and Playwright that increased code coverage and ensured the seamless delivery of mission-critical features.",
                "Collaborative & Strategic Consulting: Partnered with cross-functional teams to gather requirements, define technical roadmaps, and deliver secure, high-performance applications. Provided mentorship and strategic guidance on best practices in agile development and continuous integration, consistently exceeding client expectations."
            ]
        },
        {
            title: "Software Engineer VI",
            company: "Intel Corporation",
            location: "Hillsboro, OR (Remote)",
            period: "February 2022 – April 2024",
            icon: "Cpu",
            skills: ["React", "JavaScript", "TypeScript", "Jenkins", "Jest", "Cypress", "Scrum", "Kanban"],
            details: [
                "Spearheaded developing and optimizing a React-based frontend application, integrating it seamlessly with backend systems.",
                "Utilized modern software development methodologies such as Scrum, Kanban, and XP, adhering to secure coding practices and legal compliance guidelines.",
                "Engaged in the full application development lifecycle, from analyzing user stories to writing functional and test code.",
                "Automated build and deployment processes on Jenkins, ensuring swift delivery and maintenance, reducing time to delivery by 90%.",
                "Performed comprehensive unit, integration, and end-to-end testing using frameworks like Jest & Cypress, increasing coverage to 100%.",
                "Collaborated with product security engineers to complete SDL tasks, enhancing the application's security posture.",
                "Acted as a liaison with technical writers to assist in preparing product documentation, including installation and maintenance procedures.",
                "Conducted regular demos to stakeholders, showcasing business value and tracking progress through key performance metrics.",
                "Participated in retrospective and \"inspect and adapt\" sessions, providing input for process improvements in subsequent iterations.",
                "Engaged with end users to gather system requirements or discuss necessary modifications, ensuring the application meets user needs."
            ]
        },
        {
            title: "R&D Software Quality Assurance Engineer II",
            company: "Keysight Technologies",
            location: "Calabasas, CA, USA (Hybrid)",
            period: "March 2020 – February 2022",
            icon: "Terminal",
            skills: ["Python3", "GWT", "Apache Tomcat", "SQL", "L2/3 Protocols", "Network Testing"],
            details: [
                "Leveraged existing and developed new test cases to validate new features, protocols, and technologies in the product, requiring a deep understanding of L2/3 routing and switching protocols.",
                "Designed and executed manual and automated test cases to qualify cloud-related features and protocols in Ixia network test products, involving physical and virtual testbeds focusing on including customer escalations in regression suites.",
                "Transformed Marketing Feature/Product Requirements Documents into test plans & scenarios while maintaining current documentation.",
                "Conducted root cause analysis and filed detailed bug reports with appropriate logs and files attached.",
                "Managed high-scale topologies in system testbeds, ensuring regular updates and maintenance of various components.",
                "Made significant contributions to the core test harness and its GUI, utilizing Python3, GWT, Apache Tomcat, and SQL."
            ]
        },
        {
            title: "Student Contractor – Software Engineer in Testing",
            company: "NetApp (SolidFire)",
            location: "Wichita, KS, USA (Hybrid)",
            period: "November 2018 – March 2020",
            icon: "Server",
            skills: ["C++", "Bash", "Python2/3", "Valence", "Testing Frameworks"],
            details: [
                "Developed features and components in core SolidFire Ember and Element OS (C++ & Bash).",
                "Developed extensive Test suites && Testcases in an efficient & high-quality unit-tested code in a testing framework (Valence) using Python2/3 to reduce manual testing with a focus on performance, regression, stress, system, and exploratory testing.",
                "Ran qualification suites and cases, documented results, and debugged failures using the root cause analysis approach to ensure the highest quality and minimize defects and re-call class bugs."
            ]
        },
        {
            title: "Student Contractor – Software & Quality Assurance",
            company: "NetApp (SolidFire)",
            location: "Wichita, KS, USA (On-site)",
            period: "November 2017 - January 2018",
            icon: "Server",
            skills: ["Python", "Tkinter", "Hardware Testing", "Storage Systems"],
            details: [
                "Completed preset IOP and vendor Certification testing to validate the integration of SolidFire clusters with different vendors' hardware/software.",
                "Performed lab maintenance and equipment setup, including switch zoning, cabling, swapping failed components, OS installation, and Storage Cluster(s) setup.",
                "Scripted in Python to create an interoperability testing tool with a GUI using Tkinter."
            ]
        },
        {
            title: "Student Contractor – Quality Assurance",
            company: "NetApp (E-Series)",
            location: "Wichita, KS, USA (On-site)",
            period: "June 2016 – November 2017",
            icon: "Server",
            skills: ["Bash", "Python2/3", "Testing Automation", "Storage"],
            details: [
                "Ran predefined automated and manual test cases on different E-Series storage configurations testing for interoperability.",
                "Built storage configurations from scratch and set up all layers for testing, including OS installation, network configuration, switch zoning, cabling, swapping failed components, and configuring storage side arrays.",
                "Developed and maintained scripts in Bash (including variants such as csh, zsh and ksh) and Python (2/3) to streamline and automate an internally developed testing framework. This minimized manual testing and configuration overhead improved efficiency, and enhanced reproducibility across multiple testing environments.",
                "Documented defects, debugged and analyzed log messages on different hardware components to pinpoint root causes."
            ]
        }
    ];

    return (
        <section 
            id="experience" 
            className="mb-12 bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm gradient-border relative overflow-hidden"
            ref={containerRef}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <h3 className="text-2xl font-semibold mb-6 text-green-400 relative z-10">
                    <span className="relative inline-block">
                        Work Experience
                        <motion.span 
                            className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-400/60"
                            initial={{ width: 0 }}
                            animate={{ width: isInView ? "100%" : 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                    </span>
                </h3>
                
                {/* Timeline container */}
                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500/80 via-green-400/80 to-blue-500/80 rounded-full z-0" />
                    
                    {/* Experience cards */}
                    {experiences.map((exp, index) => {
                        const isActive = activeExperience === index;
                        const isOdd = index % 2 === 0;
                        
                        return (
                            <div key={index} className={`relative z-10 mb-8 flex flex-col md:flex-row ${isOdd ? 'md:flex-row-reverse' : ''} items-center`}>
                                {/* Timeline dot */}
                                <motion.div 
                                    className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-green-400 border-2 border-blue-500 z-20 ${isActive ? 'ring-2 ring-green-300 ring-opacity-70' : ''}`}
                                    whileHover={{ scale: 1.2 }}
                                    animate={{ 
                                        scale: isActive ? 1.2 : 1,
                                        backgroundColor: isActive ? '#34d399' : '#34d399aa'
                                    }}
                                />
                                
                                {/* Card container - take full width on mobile, half width on desktop */}
                                <div className={`md:w-5/12 w-full ${isOdd ? 'md:pl-10' : 'md:pr-10'} md:ml-auto self-start`}>
                                    <motion.div
                                        className={`w-full cursor-pointer bg-gradient-to-br ${getCompanyColor(exp.company)} backdrop-blur-sm p-4 rounded-lg shadow-xl border border-opacity-30`}
                                        whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }}
                                        onClick={() => handleExperienceClick(index)}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ 
                                            opacity: isInView ? 1 : 0, 
                                            y: isInView ? 0 : 20,
                                            height: isActive ? 'auto' : 'auto',
                                        }}
                                        transition={{ 
                                            duration: 0.4, 
                                            delay: index * 0.1,
                                            layout: { duration: 0.3 }
                                        }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div>
                                                <h4 className="text-xl font-semibold text-blue-300">{exp.title}</h4>
                                                <p className="text-gray-300">{exp.company}</p>
                                                <p className="text-gray-400 text-sm">{exp.location} | {exp.period}</p>
                                            </div>
                                            <div className="w-12 h-12 relative flex-shrink-0 ml-4 hidden md:flex items-center justify-center">
                                                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
                                                <div className="relative z-10">
                                                    {getCompanyIcon(exp.company)}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Skills tags */}
                                        {exp.skills && (
                                            <div className="mb-3 flex flex-wrap gap-1.5">
                                                {exp.skills.map((skill, skillIndex) => (
                                                    <motion.span 
                                                        key={skillIndex}
                                                        className="inline-block px-2 py-0.5 text-xs rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: isActive ? 1 : 0.7, scale: 1 }}
                                                        transition={{ delay: skillIndex * 0.05 }}
                                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                                                    >
                                                        {skill}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        )}
                                        
                                        <AnimatePresence>
                                            {isActive && !animatingOut && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <ul className="list-none space-y-3 mt-3 text-gray-300">
                                                        {sanitizeDetails(exp.details).map((detail, detailIndex) => {
                                                            // Ensure the detail is a clean string
                                                            const cleanDetail = typeof detail === 'string' 
                                                                ? detail.replace(/undefined$/, '') 
                                                                : '';
                                                            
                                                            return (
                                                                <motion.li 
                                                                    key={detailIndex}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: detailIndex * 0.1 }}
                                                                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-green-400 before:rounded-full"
                                                                >
                                                                    <TypewriterEffect text={cleanDetail} speed={5} />
                                                                </motion.li>
                                                            );
                                                        })}
                                                    </ul>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                </div>
                                
                                {/* Date display on the other side for larger screens */}
                                <motion.div 
                                    className={`hidden md:block md:w-5/12 ${isOdd ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isInView ? 0.7 : 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <span className="text-sm font-medium text-blue-400">{exp.period}</span>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
}