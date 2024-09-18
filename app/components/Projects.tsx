import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
    return (
        <section className="mb-12 bg-black/50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Notable Projects</h3>
            <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-gray-800/50 text-white">
                    <CardContent className="pt-6">
                        <h4 className="text-xl font-semibold">E-commerce Platform</h4>
                        <p className="text-gray-300">Led the development of a scalable, microservices-based e-commerce platform handling millions of transactions.</p>
                    </CardContent>
                </Card>
                <Card className="bg-gray-800/50 text-white">
                    <CardContent className="pt-6">
                        <h4 className="text-xl font-semibold">Automated Testing Framework</h4>
                        <p className="text-gray-300">Designed and implemented a company-wide automated testing framework, increasing test coverage by 70%.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}