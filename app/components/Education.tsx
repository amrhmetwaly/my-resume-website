import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

export default function Education() {
    return (
        <section id="education" className="mb-12 bg-gray-900/80 p-6 rounded-lg backdrop-blur-sm gradient-border">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Education</h3>
            <Card className="bg-gray-800/50 text-white">
                <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                        <div className="flex-grow">
                            <h4 className="text-xl font-semibold">Bachelor of Science in Computer Engineering (Cum Laude)</h4>
                            <p className="text-gray-300">Wichita State University, Wichita, KS, USA | May 2020 | GPA: 3.5/4.00</p>
                        </div>
                        <Image
                            src="/images/wushock-mascot.png"
                            alt="WuShock Mascot"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}