"use client"

import { useEffect, useRef } from "react"

export default function CosmicDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Dust particles
    const dustParticles: {
      x: number
      y: number
      size: number
      color: string
      alpha: number
      vx: number
      vy: number
      alphaChange: number
    }[] = []

    // Colors for dust particles
    const dustColors = ["#c084fc", "#e879f9", "#8b5cf6", "#d8b4fe", "#ffffff"]

    // Create dust particles
    for (let i = 0; i < 100; i++) {
      dustParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        color: dustColors[Math.floor(Math.random() * dustColors.length)],
        alpha: Math.random() * 0.5 + 0.1,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alphaChange: Math.random() * 0.01 * (Math.random() > 0.5 ? 1 : -1),
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update dust particles
      dustParticles.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Update alpha
        particle.alpha += particle.alphaChange
        if (particle.alpha <= 0.1 || particle.alpha >= 0.6) {
          particle.alphaChange *= -1
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle =
          particle.color +
          Math.floor(particle.alpha * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />
}
