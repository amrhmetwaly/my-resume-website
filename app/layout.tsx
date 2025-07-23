import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Amr H. Metwaly - Portfolio',
    description: 'A showcase of my software engineering and technical expertise',
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
        icon: [
            {
                url: '/favicon.ico',
                sizes: '32x32',
                type: 'image/x-icon',
            },
            {
                url: '/favicon.ico',
                sizes: '16x16',
                type: 'image/x-icon',
            }
        ],
        shortcut: [{ url: '/favicon.ico' }],
        apple: [{ url: '/favicon.ico' }]
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
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
            </head>
            <body className={`${inter.className} antialiased bg-black text-white overflow-x-hidden`}>
                {children}
            </body>
        </html>
    )
}