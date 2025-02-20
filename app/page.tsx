import GalaxyBackground from './components/GalaxyBackground'
import HeroSection from './components/HeroSection'
import Biography from './components/Biography'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Portfolio from './components/Portfolio'
import Awards from './components/Awards'
import Education from './components/Education'
import Contact from './components/Contact'
import LinkedInRecommendations from './components/LinkedInRecommendations'
import { Separator } from "@/components/ui/separator"
import Navbar from "./components/Navbar"

export default function Home() {
    const technologies = [
        "React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide Icons", "Three.js"
    ]

    return (
        <div className="min-h-screen text-white">
            <Navbar />
            <GalaxyBackground />
            <HeroSection />
            <main className="container mx-auto px-6 py-12 max-w-5xl">
                <Biography />
                <Skills />
                <WorkExperience />
                <Portfolio />
                <Awards />
                <LinkedInRecommendations />
                <Education />
                <Contact />
            </main>
            <footer className="py-6 text-center text-gray-300 bg-black/50 backdrop-blur-sm">
                <Separator className="mb-6" />
                <p className="mb-4">&copy; 2025 Amr H. Metwaly. All rights reserved.</p>
                <div>
                    <p className="text-sm mb-2">Technologies used in this portfolio:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {technologies.map((tech, index) => (
                            <span key={index} className="text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}