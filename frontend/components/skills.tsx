"use client"

import { motion } from "framer-motion"
import { Palette, Code, Database, GitBranch, Figma, Framer } from "lucide-react"

export default function Skills() {
  const designSkills = [
    { name: "Figma", icon: Figma, proficiency: 90 },
    { name: "Illustrator", icon: Palette, proficiency: 85 },
    { name: "Framer", icon: Framer, proficiency: 80 },
  ]

  const devSkills = [
    { name: "React", icon: Code, proficiency: 95 },
    { name: "Next.js", icon: Code, proficiency: 90 },
    { name: "Node.js", icon: Database, proficiency: 85 },
    { name: "MongoDB", icon: Database, proficiency: 80 },
    { name: "Git", icon: GitBranch, proficiency: 90 },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Tech Stack</h2>
            <p className="mt-4 text-lg text-muted-foreground">My technical skills and tools I use daily</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Design</h3>
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mb-2 flex items-center">
                      <skill.icon className="mr-2 h-5 w-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-2xl font-bold">Development</h3>
              <div className="space-y-6">
                {devSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mb-2 flex items-center">
                      <skill.icon className="mr-2 h-5 w-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-sm text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
