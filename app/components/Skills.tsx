import { Badge } from "@/components/ui/badge"

export default function Skills() {
    const skillCategories = [
        {
            name: "Programming Languages",
            skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Golang", "C++", "C", "Perl", "NodeJS", "PHP"]
        },
        {
            name: "Web & Mobile Technologies",
            skills: ["React", "React Native", "HTML5", "CSS3", "Ajax", "Bootstrap", "XML", "JSON", "GWT", "Apache Tomcat"]
        },
        {
            name: "Databases",
            skills: ["MySQL", "SQLite", "MongoDB"]
        },
        {
            name: "DevOps & Cloud",
            skills: ["Git", "Azure DevOps", "CI/CD", "Jenkins", "Docker", "Kubernetes", "Azure", "Google Cloud", "Firebase", "Terraform", "Perforce", "Mercurial"]
        },
        {
            name: "Testing & QA",
            skills: ["Jest", "Cypress", "Playwright", "Pytest", "Selenium", "qTest", "Test Automation", "Performance Testing", "Regression Testing", "Stress Testing", "System Testing", "Exploratory Testing", "Root Cause Analysis", "Interoperability Testing"]
        },
        {
            name: "Networking",
            skills: ["L2/3 Networks", "SDN", "OpenFlow", "Mininet", "Wireshark", "Switch Zoning", "Network Configuration"]
        },
        {
            name: "Security",
            skills: ["Product Security Enhancement", "Security Development Lifecycle (SDL)", "Secure Coding Practices", "TLS"]
        },
        {
            name: "Operating Systems",
            skills: ["Linux (RHEL, SUSE, CentOS, Debian, Ubuntu, UEK)", "macOS", "Windows", "Windows Server", "Element OS"]
        },
        {
            name: "Storage Systems",
            skills: ["NetApp SolidFire", "NetApp E-series", "EF-series", "SANtricity Storage Manager", "SAN Environments", "iSCSI", "FCoE", "FC", "IB", "SAS"]
        },
        {
            name: "Virtualization",
            skills: ["VMware", "Cloud Computing", "Virtual Testbeds"]
        },
        {
            name: "Project Management & Collaboration",
            skills: ["JIRA", "Confluence", "GitLab", "Azure DevOps", "Agile", "Scrum", "Kanban", "XP", "SAFe", "Requirements Analysis", "User Story Analysis"]
        },
        {
            name: "Documentation",
            skills: ["Root Cause Analysis", "Troubleshooting", "Technical Writing", "Markdown", "Product Documentation"]
        },
        {
            name: "Scripting",
            skills: ["Bash", "PowerShell", "Shell Scripting", "Python Scripting"]
        },
        {
            name: "Software Engineering",
            skills: ["UML", "SDLC", "OOP", "Data Structures", "Algorithms", "System Design", "Microservices", "Distributed Systems", "Full Stack Development", "Frontend Development", "Backend Development"]
        },
        {
            name: "IDEs & Tools",
            skills: ["VS Code", "Visual Studio", "PyCharm", "Eclipse", "Vim"]
        },
        {
            name: "Other",
            skills: ["Microsoft Office", "Interoperability Testing", "Element OS", "Active IQ", "Lab Maintenance", "Hardware Configuration"]
        }
    ];

    return (
        <section id="skills" className="mb-12 bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm gradient-border">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Skills</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category, index) => (
                    <div key={index} className="bg-blue-900/30 p-4 rounded-lg">
                        <h4 className="text-lg font-semibold mb-2 text-green-300">{category.name}</h4>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="secondary" className="bg-blue-800/50 hover:bg-blue-700/50 text-white hover-scale">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}