import { useState } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

// Define the project interface
interface Project {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    technologies: string;
    link: string;
}

export default function Portfolio() {
    const projects: Project[] = [
        {
            title: "FearFlix",
            subtitle: "Your Spooky Movie Companion",
            image: "/images/ghost-emoji.png",
            description: "A spooky-themed movie picker app designed to help users discover random horror, thriller, and mystery movies for a frightful movie night. FearFlix offers genre and decade selection, detailed movie info, and interactive animations for a thrilling experience.",
            technologies: "React, TypeScript, Styled-Components, Framer Motion, Material UI, TMDb API, Firebase/GitHub Pages, React-TSParticles",
            link: "https://fearflix-29492.web.app/"
        },
        {
            title: "SCIDLS",
            subtitle: "Secure Carrier Independent Delivery System",
            image: "/images/awards/scidl-logo.png",
            description: "The Secure Carrier-Independent Delivery System (SCIDLS) is designed to secure and protect any parcel from theft.",
            technologies: "Docker, GKE, Google Cloud, Node-Red, Blynk, React Native, Python, MongoDB, Mosquitto Broker, TLS V1.3, MQTT, Microcontrollers",
            link: "https://1drv.ms/b/s!As2IJkqrQ3ApoeoIcKj6d8J76flM2Q?e=NtjXnf"
        },
        {
            title: "IroBot",
            subtitle: "AI Powered Cryptocurrency Trading Bot",
            image: "/images/awards/IroBot_Login.PNG",
            description: "A cross-platform desktop application to launch new instances of Zenbot, a command-line cryptocurrency trading bot using Node.js and MongoDB.",
            technologies: "Docker, Python, Javascript, Nodejs, Bash, MongoDB, ElectronJS",
            link: "#"
        },
        {
            title: "Stake Hodler Capitalism",
            subtitle: "A light-weight encyclopedia in Blockchain and DeFi",
            image: "/images/awards/stake-hodler-book-series.png",
            description: "A series of books exploring blockchain technology, DeFi, IoT, and smart contracts.",
            technologies: "Writing, Research, Blockchain, DeFi, IoT",
            link: "https://www.amazon.com/dp/B08Z6ZH7WM"
        },
        {
            "title": "Webpage Commenter Extension",
            "subtitle": "Enhance your browsing experience with seamless commenting",
            "image": "/images/webpage-commenter.png",
            "description": "A browser extension that allows users to add comments to any webpage, facilitating discussions and note-taking directly in the browser.",
            "technologies": "JavaScript, HTML, CSS, Firebase, Web Extensions",
            "link": "#"
        },
        {
            "title": "Horizon Personal Budgeter",
            "subtitle": "Your Personal Finance Companion",
            "image": "/images/horizon-budgeter-logo.webp",
            "description": "Horizon Personal Budgeter is a comprehensive financial management application designed to help users track their income, expenses, and overall financial health. The app features an intuitive dashboard, detailed transaction tracking, card management, and customizable settings. With its sleek, modern interface and responsive design, Horizon Personal Budgeter makes personal finance management accessible and engaging.",
            "technologies": "React, Next.js, TypeScript, Tailwind CSS, Firebase Authentication, Framer Motion, React Icons, Lucide React, Shadcn UI Components",
            "link": "https://horizon-personal-budgeting.vercel.app/"
        },
        {
            "title": "Car Listing Scraper",
            "subtitle": "Efficient Web Scraping for Car Dealerships",
            "image": "/images/car-list-mate-logo.png",
            "description": "A powerful web scraping tool designed to extract car listings from various dealership websites. This Chrome extension navigates through multiple pages, collecting detailed information about each vehicle, including make, model, year, price, and mileage. It features adaptive scraping techniques to handle different website structures, ensuring comprehensive data collection. It collects that information into a copyable ad for your social media marketplace. These ads can further be enhanced by ChatGPT 3.5 Turbo.",
            "technologies": "TypeScript, Webpack, Chrome Extension API, Regular Expressions",
            "link": "https://github.com/yourusername/car-listing-scraper"
        }
    ]

    return (
        <section id="portfolio" className="mb-12 bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm gradient-border">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Portfolio</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

// Flip Card Component
function ProjectCard({ project }: { project: Project }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            className="flip-card-container w-full h-[360px] perspective-1000" 
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div 
                className="flip-card relative w-full h-full"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front of Card */}
                <div 
                    className="flip-card-front absolute w-full h-full rounded-lg overflow-hidden backface-hidden bg-blue-900/30 border border-blue-500/30 shadow-lg"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                        {project.title === "FearFlix" ? (
                            <div className="text-center text-9xl mb-4 glow-effect">👻</div>
                        ) : (
                            <div className="w-full h-[200px] relative mb-4">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill
                                    className="object-contain rounded"
                                />
                            </div>
                        )}
                        <h4 className="text-2xl font-bold text-green-300 text-center mt-auto">{project.title}</h4>
                        <p className="text-sm text-blue-300 mb-2 text-center">{project.subtitle}</p>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-green-400/40 rounded-tl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400/40 rounded-br-lg"></div>
                        </div>
                    </div>
                </div>

                {/* Back of Card */}
                <div 
                    className="flip-card-back absolute w-full h-full rounded-lg overflow-hidden backface-hidden bg-gradient-to-br from-blue-900/50 to-blue-950/80 border border-blue-500/30 shadow-lg p-6 flex flex-col"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <h4 className="text-xl font-bold text-green-300 mb-1">{project.title}</h4>
                    <p className="text-sm text-blue-300 mb-3">{project.subtitle}</p>
                    
                    <div className="flex-grow overflow-auto text-sm scrollbar-thin">
                        <p className="text-gray-200 mb-3">{project.description}</p>
                        <div className="mb-3">
                            <span className="text-xs uppercase tracking-wide text-blue-400 font-semibold">Technologies</span>
                            <p className="text-gray-300">{project.technologies}</p>
                        </div>
                    </div>
                    
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-auto text-center py-2 px-4 bg-blue-600/40 hover:bg-blue-600/60 rounded-md text-white transition-colors duration-300 border border-blue-500/50"
                    >
                        View Project
                    </a>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-green-400/40 rounded-tr-lg"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-400/40 rounded-bl-lg"></div>
                </div>
            </motion.div>
        </div>
    );
}