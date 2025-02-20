"use client"

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { TypewriterEffect } from './TypewriterEffect'

export default function WorkExperience() {
    const [activeExperience, setActiveExperience] = useState(-1);
    const experiences = [
        {
            title: "Freelance Full-Stack Software Engineer & Consultant",
            company: "Freelancer.com",
            location: "Remote, USA",
            period: "July 2024 – Present",
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
            details: [
                "Ran predefined automated and manual test cases on different E-Series storage configurations testing for interoperability.",
                "Built storage configurations from scratch and set up all layers for testing, including OS installation, network configuration, switch zoning, cabling, swapping failed components, and configuring storage side arrays.",
                "Developed and maintained scripts in Bash (including variants such as csh, zsh and ksh) and Python (2/3) to streamline and automate an internally developed testing framework. This minimized manual testing and configuration overhead improved efficiency, and enhanced reproducibility across multiple testing environments.",
                "Documented defects, debugged and analyzed log messages on different hardware components to pinpoint root causes."
            ]
        }
    ];

    return (
        <section id="experience" className="mb-12 bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm gradient-border">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">Work Experience</h3>
            {experiences.map((exp, index) => (
                <Card key={index} className={`mb-6 bg-blue-900/30 text-white hover-scale ${index === activeExperience ? 'border-green-400' : ''}`} onClick={() => setActiveExperience(index)}>
                    <CardContent className="pt-6">
                        <h4 className="text-xl font-semibold text-blue-300">{exp.title}</h4>
                        <p className="text-gray-300">{exp.company}, {exp.location} | {exp.period}</p>
                        <ul className="list-disc list-inside mt-2 text-gray-300">
                            {exp.details.map((detail, detailIndex) => (
                                index === activeExperience ? (
                                    <li key={detailIndex} className="mb-2">
                                        <TypewriterEffect text={detail} speed={10} />
                                    </li>
                                ) : (
                                    <li key={detailIndex} className="mb-2">{detail}</li>
                                )
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            ))}
        </section>
    )
}