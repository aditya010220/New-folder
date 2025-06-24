"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Cosmic Tech",
      period: "Jan 2022 - Present",
      description: "Leading the frontend development team, implementing new features, and improving performance.",
      technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    },
    {
      id: 2,
      role: "UI/UX Designer & Developer",
      company: "Nebula Design",
      period: "Mar 2020 - Dec 2021",
      description:
        "Designed and developed user interfaces for various clients, focusing on accessibility and user experience.",
      technologies: ["Figma", "React", "SCSS", "Framer Motion"],
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Stellar Startup",
      period: "Jun 2018 - Feb 2020",
      description: "Developed responsive web applications and contributed to the company's design system.",
      technologies: ["JavaScript", "React", "CSS", "Webpack"],
    },
    {
      id: 4,
      role: "Web Development Intern",
      company: "Galaxy Digital",
      period: "Jan 2018 - May 2018",
      description: "Assisted in developing websites and web applications for clients.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ]

  return (
    <section id="experience" className="relative py-20">
      <div className="planet planet-2" style={{ top: "15%", right: "8%", width: "60px", height: "60px" }}></div>
      <div className="planet planet-4" style={{ bottom: "20%", left: "5%", width: "40px", height: "40px" }}></div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl cosmic-gradient">Experience & Journey</h2>
            <p className="mt-4 text-lg text-foreground/80">My professional voyage through the digital cosmos</p>
          </div>
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-primary/30 md:before:mx-auto md:before:ml-0">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col gap-6 md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 shadow-md md:mx-auto">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className={`md:w-5/12 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-foreground">{experience.role}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-foreground/70">
                        <span>{experience.company}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {experience.period}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-foreground/80">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
