import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Amr H. Metwaly | Senior Software & QA Engineer',
    description: 'Experienced Senior Software & QA Engineer specializing in full-stack development, test automation, and quality assurance. Based in USA, with experience in Egypt and international markets.',
    keywords: 'Senior Software Engineer, QA Engineer, Full Stack Developer, Test Automation, Python, JavaScript, TypeScript, React, Node.js, DevOps, CI/CD, Agile, Scrum, Egypt, USA, Hillsboro Oregon, Tech Industry',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.amrhmetwaly.com', // Replace with your actual domain
        siteName: 'Amr H. Metwaly Portfolio',
        images: [
            {
                url: '/images/profile-picture.jpg', // Replace with your actual profile picture
                width: 1200,
                height: 630,
                alt: 'Amr H. Metwaly - Senior Software & QA Engineer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@amrhmetwaly', // Replace with your Twitter handle
        creator: '@amrhmetwaly', // Replace with your Twitter handle
    },
    icons: {
        icon: '/favicon.ico',
    },
    alternates: {
        canonical: 'https://www.amrhmetwaly.com', // Replace with your actual domain
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}