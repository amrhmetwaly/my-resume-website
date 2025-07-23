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
            "title": "BidMyBite",
            "subtitle": "AI-Powered Catering Marketplace & Event Management Platform",
            "image": "/images/bidmybite-logo.png",
            "description": "TheGrubHubby revolutionizes event catering with an intelligent marketplace that connects event organizers with professional caterers through competitive bidding. Features AI-powered smart matching that analyzes event requirements to instantly connect users with the most suitable caterers in their area, comprehensive communication hub with real-time messaging, file sharing, and video calls, and verified reviews system with photo verification. The platform includes advanced admin dashboard for managing users, caterers, events, and analytics, integrated payment processing, and comprehensive event management tools. Perfect for wedding planners, corporate event managers, and individuals seeking professional catering services with data-driven matching and seamless coordination.",
            "technologies": "Next.js, TypeScript, React, Tailwind CSS, Firebase, Firestore, Framer Motion, Radix UI, Vercel Analytics, Google AdSense, PWA, Vercel",
            "link": "https://bidmybite.com"
        },
        {
            "title": "GradeSwiftly",
            "subtitle": "AI-Powered Trading Card Analysis & Marketplace Integration",
            "image": "/images/gradeswiftly-logo.png",
            "description": "GradeSwiftly revolutionizes trading card collecting with AI-driven analysis for graded cards. Upload images of your PSA-graded cards or enter certificate numbers to get instant market valuations, professionally optimized listing titles and descriptions, and seamless export capabilities to eBay and other marketplaces. Features advanced OCR technology for automatic card detail extraction, real-time pricing data from multiple sources, and batch processing for large collections. Perfect for collectors, dealers, and enthusiasts looking to maximize their card values with data-driven insights.",
            "technologies": "Next.js, TypeScript, React, Tailwind CSS, Stripe, Puppeteer, Tesseract.js OCR, Vercel, Radix UI, Framer Motion",
            "link": "https://gradeswiftly.com"
        },
        {
            "title": "Hangouty",
            "subtitle": "AI-Powered Social Event Planner",
            "image": "/images/hangouty-logo.png",
            "description": "Hangouty revolutionizes social event planning with AI-driven recommendations tailored to your mood, preferences, and location. Discover unique venues, effortlessly coordinate with friends, and filter activities to perfectly match your vibe. Hangouty makes planning enjoyable by delivering personalized hangout experiences, whether you're looking for relaxed meetups, energetic adventures, or memorable city explorations.",
            "technologies": "React Native, Expo, Next.js, Golang, Kubernetes, Docker, AWS, GPT",
            "link": "https://hangouty.com"
        },
        {
            "title": "iLearned AI",
            "subtitle": "AI-Powered Personalized Learning Platform",
            "image": "/images/ilearned-ai-logo.jpeg",
            "description": "iLearned AI transforms the learning experience with intelligent, personalized education powered by advanced AI technology. Create custom learning paths, get instant explanations on complex topics, and receive AI-generated quizzes and assessments tailored to your learning style. Features interactive chat-based tutoring, progress tracking with detailed analytics, and adaptive content delivery that evolves with your understanding. The platform supports multiple learning formats including visual, auditory, and kinesthetic approaches, making education accessible and engaging for learners of all backgrounds. Perfect for students, professionals, and lifelong learners seeking efficient, personalized knowledge acquisition with measurable progress insights.",
            "technologies": "Next.js, TypeScript, React, OpenAI API, AI SDK, Tailwind CSS, Radix UI, Framer Motion, React Hook Form, Recharts, Vercel",
            "link": "https://ilearned.ai"
        },
        {
            "title": "Webpage Commenter Extension",
            "subtitle": "Enhance your browsing experience with seamless commenting",
            "image": "/images/webpage-commenter.png",
            "description": "A browser extension that allows users to add comments to any webpage, facilitating discussions and note-taking directly in the browser.",
            "technologies": "JavaScript, HTML, CSS, Firebase, Web Extensions",
            "link": "https://webpagecommenter.com"
        },
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
            "link": "#"
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