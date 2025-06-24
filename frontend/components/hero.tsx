"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Create shooting stars
  const [shootingStars, setShootingStars] = useState<{ id: number; top: number; left: number; delay: number }[]>([])

  useEffect(() => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push({
        id: i,
        top: Math.random() * 50, // Top position between 0-50%
        left: Math.random() * 30, // Left position between 0-30%
        delay: Math.random() * 15, // Random delay between 0-15s
      })
    }
    setShootingStars(stars)

    // Regenerate shooting stars periodically
    const interval = setInterval(() => {
      setShootingStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          top: Math.random() * 50,
          left: Math.random() * 30,
          delay: Math.random() * 15,
        })),
      )
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      <div className="planet planet-1"></div>
      <div className="planet planet-2"></div>
      <div className="planet planet-3"></div>
      <div className="planet planet-4"></div>
      <div className="planet planet-5"></div>

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{ "--top": star.top, "--left": star.left, "--delay": star.delay } as React.CSSProperties}
        ></div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl"
      >
        <p className="mb-4 text-lg font-medium text-primary">Welcome to my cosmic portfolio</p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          <span className="cosmic-gradient">Exploring Aditya&apos;s Universe</span>
          <br />
          <span className="text-white">of Endless Creation</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-foreground/80">
          Creating stellar digital experiences with modern technologies and cosmic design. Embark on a journey through
          my universe of projects.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="https://github.com/aditya010220/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/aditya-maurya-1b1026272/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://x.com/athreya2902"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 z-10"
        onClick={scrollToProjects}
      >
        <ArrowDown className="h-6 w-6 animate-bounce cursor-pointer text-foreground/70 hover:text-primary" />
      </motion.div>
    </section>
  )
}
