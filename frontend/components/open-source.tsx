"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork } from "lucide-react"

export default function OpenSource() {
  const contributions = [
   
    {
      id: 3,
      project: "Stellar Components",
      repo: "stellar/components",
      description: "Created a new component library used by the community",
      role: "Contributor",
      technologies: ["React", "Styled Components"],
      stars: 650,
      forks: 90,
      url: "https://github.com/stellar/components",
    },
    {
      id: 4,
      project: "Galaxy Types",
      repo: "galaxyjs/types",
      description: "Added TypeScript support and improved type definitions",
      role: "Contributor",
      technologies: ["TypeScript", "JavaScript"],
      stars: 450,
      forks: 60,
      url: "https://github.com/galaxyjs/types",
    },
  ]

  return (
    <section id="open-source" className="relative py-20">
      <div className="planet planet-3" style={{ top: "30%", right: "10%", width: "50px", height: "50px" }}></div>
      <div className="planet planet-1" style={{ bottom: "20%", left: "5%", width: "60px", height: "60px" }}></div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl cosmic-gradient">Open Source Contributions</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Projects I've contributed to and maintain in the open source universe
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {contributions.map((contribution, index) => (
              <motion.div
                key={contribution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-foreground">{contribution.project}</CardTitle>
                      <Badge
                        variant={contribution.role === "Maintainer" ? "default" : "outline"}
                        className={
                          contribution.role === "Maintainer"
                            ? "bg-primary text-white"
                            : "border-primary/30 text-primary"
                        }
                      >
                        {contribution.role}
                      </Badge>
                    </div>
                    <CardDescription className="text-foreground/70">{contribution.repo}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-foreground/80">{contribution.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {contribution.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/20 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-foreground/70">
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4" />
                        <span>{contribution.stars}</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="mr-1 h-4 w-4" />
                        <span>{contribution.forks}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/100 text-foreground/90"
                      asChild
                    >
                      <a href={contribution.url} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
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
