"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "ishaan-arora-resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
const skills = [
    "React",
    "Express.js",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "Figma",
    "UI/UX",
    "MongoDB",
    "Canvas",
    "Git",
    "Docker",
    "Aws",
  ]

  return (
    <section id="about" className="relative py-20">
      <div className="planet planet-1" style={{ top: "20%", left: "5%", width: "70px", height: "70px" }}></div>
      <div className="planet planet-5" style={{ bottom: "10%", right: "10%", width: "50px", height: "50px" }}></div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary/30">
                <Image
                  src="/ANOTHER.jpg?height=320&width=320"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl cosmic-gradient">About Me</h2>
              <p className="text-lg text-foreground/80">
                I'm a passionate designer and developer with a love for creating beautiful, functional, and
                user-centered digital experiences. With a background in both design and development, I bring a unique
                perspective to every project. I'm dedicated to open source and constantly exploring new technologies to
                expand my cosmic toolkit.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-muted px-3 py-1 text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <div>
                {/* <Button onClick={handleDownload} className="bg-primary text-white hover:bg-primary/80">
                  Download Resume
                </Button> */}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
