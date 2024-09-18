"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card className="bg-gray-800/50 text-white mb-4 overflow-hidden transition-all duration-300 ease-in-out hover:bg-gray-700/50">
            <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src={recommendation.avatarSrc} alt={recommendation.name} />
                        <AvatarFallback>{recommendation.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                        <h4 className="font-semibold text-blue-300">{recommendation.name}</h4>
                        <p className="text-sm text-gray-300">{recommendation.title}</p>
                        <p className="text-xs text-gray-400 mb-2">{recommendation.date}, {recommendation.relationship}</p>
                        <div className={`mt-2 text-gray-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                            {recommendation.content}
                        </div>
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="mt-2 text-blue-400 hover:text-blue-300 flex items-center transition-colors duration-200"
                        >
                            {isExpanded ? (
                                <>View less <ChevronUp className="ml-1 h-4 w-4" /></>
                            ) : (
                                <>View more <ChevronDown className="ml-1 h-4 w-4" /></>
                            )}
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default function LinkedInRecommendations() {
    return (
        <section id="recommendations" className="mb-12 bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm gradient-border">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">Praise</h3>
            <div className="space-y-4">
                {recommendations.map((recommendation, index) => (
                    <RecommendationCard key={index} recommendation={recommendation} />
                ))}
            </div>
        </section>
    );
}