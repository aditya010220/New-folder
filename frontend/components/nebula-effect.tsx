"use client"

import { useEffect, useRef } from "react"

export default function NebulaEffect() {
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

    // Nebula colors
    const colors = [
      "rgba(138, 43, 226, 0.2)", // Purple
      "rgba(199, 21, 133, 0.2)", // Pink
      "rgba(75, 0, 130, 0.2)", // Indigo
      "rgba(148, 0, 211, 0.2)", // Violet
      "rgba(186, 85, 211, 0.2)", // Medium Orchid
    ]

    // Create nebula clouds
    const nebulaClouds: {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
    }[] = []

    for (let i = 0; i < 8; i++) {
      nebulaClouds.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 300 + 200,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05,
      })
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with slight fade effect
      ctx.fillStyle = "rgba(13, 6, 30, 0.01)" // Very dark blue with high transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update nebula clouds
      nebulaClouds.forEach((cloud) => {
        // Move cloud
        cloud.x += cloud.vx
        cloud.y += cloud.vy

        // Wrap around edges
        if (cloud.x < -cloud.radius) cloud.x = canvas.width + cloud.radius
        if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius
        if (cloud.y < -cloud.radius) cloud.y = canvas.height + cloud.radius
        if (cloud.y > canvas.height + cloud.radius) cloud.y = -cloud.radius

        // Draw cloud
        const gradient = ctx.createRadialGradient(cloud.x, cloud.y, 0, cloud.x, cloud.y, cloud.radius)
        gradient.addColorStop(0, cloud.color)
        gradient.addColorStop(1, "transparent")

        ctx.beginPath()
        ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 bg-[#0d061e]" />
}
