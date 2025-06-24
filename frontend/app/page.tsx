import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import OpenSource from "@/components/open-source"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CosmicParticles from "@/components/cosmic-particles"
import NebulaEffect from "@/components/nebula-effect"
import CosmicDust from "@/components/cosmic-dust"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <NebulaEffect />
      <CosmicParticles />
      <CosmicDust />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <OpenSource />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
