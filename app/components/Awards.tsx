import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

export default function Awards() {
    const awards = [
        {
            title: "Don and Lee Wadsworth Walk On Student Athlete Scholarship",
            year: "2017-2018",
            image: "/images/awards/scholarships.png"
        },
        {
            title: "TechMidwest 2017 Hackathon 1st Place",
            description: "For a cryptocurrency trading bot",
            image: "/images/awards/Hackathon.png"
        },
        {
            title: "Upper 30% of Class",
            year: "2015-2020",
            image: "/images/awards/001-diploma.png"
        },
        {
            title: "All American 2nd Academic Team",
            description: "Academic recognition from ACRA",
            image: "/images/awards/005-interface.png"
        },
        {
            title: "Dean's Honor Roll",
            description: "For academic excellence",
            year: "2015-2018",
            image: "/images/awards/004-cup.png"
        },
        {
            title: "Nominated for Co-operative Education Student of the Year",
            year: "2017",
            image: "/images/awards/006-people.png"
        },
        {
            title: "Iron Oar Award",
            description: "Wichita State University Crew",
            year: "2016-2017",
            image: "/images/awards/005-rowing-1.png"
        },
        {
            title: "Wichita State Varsity Crew Scholarship",
            year: "2016-2017",
            image: "/images/awards/006-rowing.png"
        }
    ]

    return (
        <section id="awards" className="mb-12 bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm gradient-border">
            <h3 className="text-2xl font-semibold mb-4 text-green-400">Honors and Awards</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {awards.map((award, index) => (
                    <Card key={index} className="bg-green-900/30 text-white hover-scale">
                        <CardContent className="pt-6">
                            <Image src={award.image} alt={award.title} width={64} height={64} className="mx-auto mb-4" />
                            <h4 className="text-lg font-semibold text-center text-blue-300">{award.title}</h4>
                            {award.description && <p className="text-sm text-gray-300 text-center">{award.description}</p>}
                            {award.year && <p className="text-sm text-green-400 text-center">{award.year}</p>}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}