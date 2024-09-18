"use client"

import { useEffect, useRef } from "react"

export default function GalaxyBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const stars: { x: number; y: number; radius: number; vx: number; vy: number }[] = []
        const numStars = 200
        const colors = ['#ffffff', '#ffe9c4', '#d4fbff']

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5,
                vx: Math.random() * 0.5 - 0.25,
                vy: Math.random() * 0.5 - 0.25
            })
        }
        function drawStars() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            stars.forEach((star) => {
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false)
                ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
                ctx.fill()

                star.x += star.vx
                star.y += star.vy

                if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx
                if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy
            })

            requestAnimationFrame(drawStars)
        }

        drawStars()

        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />
}