"use client"

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Recommendation {
    name: string;
    title: string;
    date: string;
    relationship: string;
    content: string;
    avatarSrc: string;
}

const recommendations: Recommendation[] = [
    {
        name: "Brian Ramming",
        title: "Software Developer, Architect, Creator",
        date: "January 14, 2024",
        relationship: "Brian worked with Amr H. on the same team",
        content: "Over the past 2 years I had the pleasure of working closely with Amr. We worked on the same Team as top-tier software application developers! Over those 2 years I got to see Amr really grow into a great software engineer. He started out by filling a missing role we had in the team: Software QA and Validation engineer. He quickly came up to speed. He created our Test Plan and automated our end-to-end integration testing using Cypress which he had no prior knowledge of at the time. A few months after that he had the desire to dive into more application development, so we got him into React. He and I worked closely on the front-end development. It was great being able to mentor Amr in web development. He was eager to learn and asked a lot of questions. I really enjoyed our paired-programming sessions. Sometimes mistakes happened - some small regressions were introduced - but Amr was on top of it. He always responded to feedback from code reviews and learned from those mistakes. Over time those were less and less and, as a Team, we all fell into a great rhythm. Amr was part of a small team of 3 developers, but we are top performers and got stuff done. It was an honor being able to work with and get to know Amr. It would be a pleasure being able to work with him again!",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    },
    {
        name: "Noor Lallmamode",
        title: "Software Product Manager and Northwestern Masters of Product Design and Product Development Student",
        date: "January 12, 2024",
        relationship: "Noor worked with Amr H. on the same team",
        content: "I was a product owner on a team where Amr was a developer. Amr is a highly engaged, intelligent developer that is able to learn quickly. He has good ideas and unique perspectives to problems. Amr is able to work well independently and as part of a team. Whenever I presented Amr with a customer objective, he was able to respond with multiple options that all displayed empathy for the user. He was a pleasure to work with and brought a sense of comradery to our team. As a highly self-motivated and skilled developer, Amr will be an asset to any team he is on.",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    },
    {
        name: "Johana Sleem",
        title: "Software Engineering Manager in Internet Of Things (IOT) Group",
        date: "January 11, 2024",
        relationship: "Johana managed Amr H. directly",
        content: "I have the pleasure of working with Amr for the past 2 years. He has demonstrated his commitment to growth as a Software QA Engineer in addition to his role as a Software Engineer. Amr always been eager to take on new tasks that require research into the tools at hand. His adaptability and willingness to learn have been key in his development and greatly contributed to the success of our projects. Amr is not only technically skilled but also a great team player. Our partners and our stakeholders enjoyed working with Amr. He always brought in new innovative solutions that delighted our customers. I would highly recommend Amr, and I would be more than happy to provide any additional information.",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    },
    {
        name: "Firas Shahin",
        title: "PhD student at Wichita State University",
        date: "February 13, 2020",
        relationship: "Firas and Amr H. studied together",
        content: "Amr has my whole-hearted recommendation; he is an intelligent, driven man that can be depended upon to get the job done. Amr is a hardworking and multi-talented student. He has an upbeat personality with a can-do attitude.",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    },
    {
        name: "Leonardo Perrone",
        title: "Software Engineer at Bloomberg LP",
        date: "February 12, 2020",
        relationship: "Leonardo worked with Amr H. but on different teams",
        content: "I have studied and worked with Amr during our college period and I consider him one of the people that inspired me to push myself further and continue to learn new things. He came up with the idea of starting a coding club (Shocker Developer Kick-Starter) at our university for students coming from all sorts of backgrounds. He didn't just come up with the idea, he pushed through and took the time to make it a reality very quickly and motivated me into being part of this awesome movement. Amr has the work ethic of an athlete, when he sets his mind to something he will work on it at a constant pace so that he can get to it. He showed this both in personal life, in school and at work. Whenever I needed help with something he was eager and happy to take the time to help me and that attitude was part of what inspired me in doing the same for other people. In any aspects of our time together, whether it was in school or work or free time, Amr has been an amazing person to be involved with. I would definitely recommend him for any team looking for a hungry and smart software engineer.",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    },
    {
        name: "Abu Asaduzzaman",
        title: "Associate Professor of Computer Engineering at Wichita State University",
        date: "February 12, 2020",
        relationship: "Abu was Amr H.'s teacher",
        content: "Amr took CS 697AN (Hardware-Based Security Engineering), CS 594/594L (Microprocessor-Based System Design), and CS 394 (Introduction to Computer Architecture) courses from me and passed with flying colors. Amr and I served together for various student organizations. In 2019, Amr served as the Director of Awards of IEEE-HKN honor society, where I served as a judge. In 2017-2018, Amr served as the president of the IEEE Student Branch and the ACM Student Chapter at WSU, where I served as the faculty/academic adviser. Amr recently pitched an idea (WU Coin proposal) to WSU administrators to create a cryptocurrency as a replacement payment system for educational institutions. He developed a computer application (Shocker Development Kick-Starter, the first one on WSU campus) for the student organizations. Amr received the prestigious Don and Lee Wadsworth Family and the WSU Rowing scholarships. I have noticed that Amr has the rare talent of working on multiple tasks simultaneously, also his leadership skill is promising. At a personal level, I find him honest, punctual, and humble. I wish him all the best. Thank you.",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    },
    {
        name: "Benjamin Fradella",
        title: "Software Engineer in Test at NetApp SolidFire",
        date: "February 12, 2020",
        relationship: "Benjamin worked with Amr H. on the same team",
        content: "I worked with Amr in the SolidFire Core Storage Engineering group. He showed great skill in working with large, complex OOP frameworks and writing automated tests. Always looking for new ways to streamline processes and minimize risk.",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    },
    {
        name: "Nathaniel Hoefer",
        title: "Software Engineer at NetApp",
        date: "February 18, 2020",
        relationship: "Nathaniel worked with Amr H. on the same team",
        content: "Amr clearly shown an intensity in his drive to grow and contribute to his team. He was always quick to respond when asked a question and consistently addressed problems other team members came across. When he was given a task, he was able to operate with little direction due to his self-motivation - resulting in us being able to rely on him no matter the difficulty of the task. I had also personally interacted with him when he was president of a university student organization where he took initiative to instill his love for software development into students who haven't had an opportunity to learn programming. This was all accomplished while balancing classes, work, and other extra-curricular activities.",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    },
    {
        name: "Derek Humlicek",
        title: "Senior DevOps Engineer at TouchNet Information Systems, Inc.",
        date: "February 17, 2020",
        relationship: "Derek was senior to Amr H. but didn't manage directly",
        content: "Amr is a great guy to work with and have on your team. He was always ready to jump into a project and figure out what needs to be done. Always willing to help out other engineers and students with his time and knowledge. While working on several complex coding tasks, we would jump on a call and co-program on different problems. He has been very knowledgeable on python related issues and has brought great insights to our team as they come up to speed.",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    },
    {
        name: "Jason Unrein",
        title: "Software Engineer in Test",
        date: "February 14, 2020",
        relationship: "Jason was senior to Amr H. but didn't manage directly",
        content: "Amr was a great engineer to have on our team and I enjoyed working with him on the various projects we took on. Amr is a very productive person. He is hardworking, open-minded and always looking to where we were going and how we could do things better. He also always demonstrated a desire for proficiency and education which is critical in our field since we're learning every day. I could trust him with jobs that he might not be well educated on, but he would know enough to get the job done on time and go above and beyond researching and understanding the job at hand.",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    },
    {
        name: "Adam Sweeney",
        title: "Lead Software Engineer in R&D at Schweitzer Engineering Laboratories",
        date: "February 14, 2020",
        relationship: "Adam was Amr H.'s teacher",
        content: "I first met Amr when he started as a student contractor at NetApp. I got to know him a lot more when he later became a student in one of my classes. During that time it became apparent that he was a man of principle with a desire for learning and self-improvement. Unlike most of my students, he did not shy away from asking questions or trying to take the principle being taught to the next level. I learned of his desire for self-improvement when he was forced to withdraw from my class for reasons outside of his control. This was something that I saw every semester. Many times, the student's education was delayed for a year or more, or they were forced to stop attending altogether. We can't stop life, but Amr didn't let life stop him. He got back in my class next semester, and performed incredibly well. The self-discipline that was required to recover that quickly and to come back as strong as he did is still something that gives me pause. Amr has my whole-hearted recommendation; he is an intelligent, driven man that can be depended upon to get the job done.",
        avatarSrc: "/placeholder.svg?height=40&width=40"
    }
];

export default function LinkedInRecommendations() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [autoplayPaused, setAutoplayPaused] = useState(false);

    // Handle mouse move for the glow effect
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

    // Autoplay functionality
    useEffect(() => {
        if (autoplayPaused) return;
        
        const interval = setInterval(() => {
            handleNextSlide();
        }, 8000);
        
        return () => clearInterval(interval);
    }, [activeIndex, autoplayPaused]);

    // Fixed function names and added event parameter
    const handleNextSlide = (e?: React.MouseEvent) => {
        // Stop event propagation if event exists
        if (e) {
            e.stopPropagation();
        }
        
        setDirection(1);
        setActiveIndex((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));
    };

    const handlePrevSlide = (e?: React.MouseEvent) => {
        // Stop event propagation if event exists
        if (e) {
            e.stopPropagation();
        }
        
        setDirection(-1);
        setActiveIndex((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    const activeRecommendation = recommendations[activeIndex];
    
    // Create excerpt of the content
    const getExcerpt = (content: string, maxLength = 150) => {
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength).trim() + '...';
    };

    return (
        <section 
            id="recommendations" 
            className="relative mb-12 overflow-hidden rounded-xl"
            ref={containerRef}
            onMouseEnter={() => setAutoplayPaused(true)}
            onMouseLeave={() => setAutoplayPaused(false)}
        >
            {/* Glow Effect */}
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

            {/* Main Content Container */}
            <div className="relative z-10 bg-gradient-to-br from-gray-900/90 to-gray-800/30 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-green-500/20">
                {/* Header with animated lines */}
                <div className="mb-10 relative">
                    <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gradient-to-r from-transparent to-green-500/70"></div>
                    <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 py-2">
                        What People Say
                    </h3>
                    <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gradient-to-l from-transparent to-green-500/70"></div>
                </div>

                {/* Testimonial Carousel */}
                <div className="mx-auto max-w-4xl relative">
                    <AnimatePresence mode="wait" initial={false} custom={direction}>
                        <motion.div
                            key={activeIndex}
                            custom={direction}
                            initial={{ 
                                opacity: 0,
                                x: direction === 1 ? 100 : -100 
                            }}
                            animate={{ 
                                opacity: 1,
                                x: 0,
                                transition: { 
                                    type: "spring", 
                                    stiffness: 300, 
                                    damping: 30 
                                } 
                            }}
                            exit={{ 
                                opacity: 0,
                                x: direction === 1 ? -100 : 100,
                                transition: { duration: 0.2 } 
                            }}
                            className="w-full"
                        >
                            <div className="relative flex flex-col items-center">
                                {/* Quote icon */}
                                <div className="absolute -top-6 left-0 text-green-500/30">
                                    <Quote size={60} />
                                </div>
                                
                                {/* Avatar with glow */}
                                <div className="relative mb-6 group">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/50 to-emerald-300/50 blur-lg transform group-hover:scale-110 transition-all duration-500"></div>
                                    <Avatar className="w-20 h-20 border-2 border-green-500/50 relative z-10">
                                        <AvatarImage src={activeRecommendation.avatarSrc} alt={activeRecommendation.name} />
                                        <AvatarFallback className="bg-gray-800 text-green-400 text-lg">
                                            {activeRecommendation.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                
                                {/* Content */}
                                <div className="text-center">
                                    <motion.h4 
                                        className="text-xl font-bold text-green-400 mb-1"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                                    >
                                        {activeRecommendation.name}
                                    </motion.h4>
                                    
                                    <motion.p 
                                        className="text-sm text-gray-300 mb-1"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                                    >
                                        {activeRecommendation.title}
                                    </motion.p>
                                    
                                    <motion.p 
                                        className="text-xs text-gray-400 mb-6"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                                    >
                                        {activeRecommendation.date} • {activeRecommendation.relationship}
                                    </motion.p>
                                    
                                    <motion.div 
                                        className="relative max-w-2xl mx-auto text-gray-200 leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1, transition: { delay: 0.5 } }}
                                    >
                                        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-[1000px]' : 'max-h-[120px] overflow-hidden'}`}>
                                            <p className="relative z-10">
                                                {isExpanded 
                                                    ? activeRecommendation.content 
                                                    : getExcerpt(activeRecommendation.content)
                                                }
                                            </p>
                                            
                                            {!isExpanded && (
                                                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900/90 to-transparent pointer-events-none"></div>
                                            )}
                                        </div>
                                        
                                        <button
                                            onClick={() => setIsExpanded(!isExpanded)}
                                            className="mt-4 px-4 py-1 rounded-full text-sm bg-green-500/20 text-green-400 hover:bg-green-500/30 hover:text-green-300 transition-all duration-300 border border-green-500/30 shadow-md hover:shadow-green-500/20 z-20 relative"
                                        >
                                            {isExpanded ? 'Show Less' : 'Read Full Recommendation'}
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    
                    {/* Large clickable navigation arrows (outside of content) */}
                    <button 
                        onClick={handlePrevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 z-30 hover:scale-110 transition-transform duration-200"
                        aria-label="Previous testimonial"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 text-green-400 hover:bg-green-500/30 hover:text-white transition-all duration-300 focus:outline-none shadow-lg">
                            <ChevronLeft size={24} />
                        </div>
                    </button>
                    
                    <button 
                        onClick={handleNextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 z-30 hover:scale-110 transition-transform duration-200"
                        aria-label="Next testimonial"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 text-green-400 hover:bg-green-500/30 hover:text-white transition-all duration-300 focus:outline-none shadow-lg">
                            <ChevronRight size={24} />
                        </div>
                    </button>
                    
                    {/* Indicator Dots */}
                    <div className="flex justify-center space-x-2 items-center mt-8 z-20 relative">
                        {recommendations.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === activeIndex 
                                        ? 'w-8 bg-green-500' 
                                        : 'w-2 bg-gray-600 hover:bg-green-500/50'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl"></div>
                <div className="absolute top-1/3 right-10 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
            </div>
        </section>
    );
}