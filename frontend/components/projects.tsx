"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cosmic Dashboard",
      description: "A modern web application built with React and Next.js",
      image: "/civicspark.jpeg?height=300&width=500",
      tags: ["React", "Next.js", "Tailwind CSS"],
      category: "Development",
      demoUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 2,
      title: "Nebula Commerce",
      description: "A mobile-first e-commerce platform with a custom CMS",
      image: "/env.jpg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Development",
      demoUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 3,
      title: "Stellar Analytics",
      description: "An AI-powered dashboard for data visualization",
      image: "/artworld.png?height=300&width=500",
      tags: ["TypeScript", "D3.js", "Python"],
      category: "Development",
      demoUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 4,
      title: "Orbit Design System",
      description: "A design system and component library for rapid development",
      image: "/isro.jpg?height=300&width=500",
      tags: ["Figma"],
      category: "Design",
      demoUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 5,
      title: "Galaxy Fitness",
      description: "A mobile app for tracking fitness and nutrition",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "Firebase", "Redux"],
      category: "Development",
      demoUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 6,
      title: "Pulsar Brand",
      description: "A brand identity design for a tech startup",
      image: "/culture.png?height=300&width=500",
      tags: ["Figma"],
      category: "Design",
      demoUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 7,
      title: "Lunar UI Kit",
      description: "A comprehensive UI kit for mobile and web applications",
      image: "/trash.png?height=300&width=500",
      tags: ["UI Design", "Figma"],
      category: "Design",
      demoUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 8,
      title: "Astral Motion Graphics",
      description: "A series of animated brand identities and motion graphics",
      image: "/DMRC.png?height=300&width=500",
      tags: ["Figma","Canvas"],
      category: "Design",
      demoUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
  ]

  const [activeCategory, setActiveCategory] = useState("Development")
  const [isDesignMode, setIsDesignMode] = useState(false)

  // Filter projects based on toggle state
  const filteredProjects = projects.filter((project) => 
    project.category === (isDesignMode ? "Design" : "Development")
  )

  return (
    <section id="projects" className="relative py-20">
      <div className="planet planet-3" style={{ top: "10%", right: "5%", width: "60px", height: "60px" }}></div>
      <div className="planet planet-4" style={{ bottom: "20%", left: "8%", width: "50px", height: "50px" }}></div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl cosmic-gradient">Projects</h2>
            <p className="mt-4 text-lg text-foreground/80">A selection of my cosmic creations and stellar projects</p>
          </div>

          {/* Category Toggle */}
          <div className="mb-10 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center space-x-4 rounded-full bg-card/50 p-2 backdrop-blur-sm border border-primary/20">
              <div className="flex items-center space-x-2 px-4">
                <Code className={`h-5 w-5 ${!isDesignMode ? "text-primary" : "text-foreground/50"}`} />
                <span className={`text-sm font-medium ${!isDesignMode ? "text-primary" : "text-foreground/50"}`}>Development</span>
              </div>
              
              <Switch
                checked={isDesignMode}
                onCheckedChange={setIsDesignMode}
                className="data-[state=checked]:bg-primary"
              />
              
              <div className="flex items-center space-x-2 px-4">
                <Palette className={`h-5 w-5 ${isDesignMode ? "text-primary" : "text-foreground/50"}`} />
                <span className={`text-sm font-medium ${isDesignMode ? "text-primary" : "text-foreground/50"}`}>Design</span>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold cosmic-gradient">
                {isDesignMode ? "Design Projects" : "Development Projects"}
              </h3>
              <p className="text-sm text-foreground/70">
                {isDesignMode 
                  ? "UI/UX, branding, and visual design work" 
                  : "Web, mobile, and full-stack development projects"}
              </p>
            </div>
          </div>

          {/* Projects Grid with animation */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="transition-all duration-300"
              >
                <Card className="h-full overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-foreground/70">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button size="sm" className="bg-primary text-white hover:bg-primary/80" asChild>
                      <a href={project.githubUrl}>View Project</a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/30 text-foreground/80 hover:text-primary"
                      asChild
                    >
                      
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/30 text-foreground/80 hover:text-primary"
                      asChild
                    >
                      
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
