import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

export default function Portfolio() {
    const projects = [
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
        }
    ]

    return (
        <section id="portfolio" className="mb-12 bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm gradient-border">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Portfolio</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Card key={index} className="bg-blue-900/30 text-white hover-scale">
                        <CardContent className="pt-6">
                            {project.title === "FearFlix" ? (
                                <div className="text-center text-8xl mb-4">👻</div>
                            ) : (
                                <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover mb-4 rounded" />
                            )}
                            <h4 className="text-xl font-semibold text-green-300">{project.title}</h4>
                            <p className="text-sm text-blue-300 mb-2">{project.subtitle}</p>
                            <p className="text-gray-300 mb-2">{project.description}</p>
                            <p className="text-sm text-gray-400"><strong>Technologies:</strong> {project.technologies}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mt-2 inline-block hover-scale">Learn More</a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}