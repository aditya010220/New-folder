import { Github, Linkedin, Twitter,Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold text-primary">About Me</h3>
            <p className="text-foreground/70">
             Design meets code in every crafted experience.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
              </Link>
              <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
              </Link>
              <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
              </Link>
              <Link href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <Mail className="h-5 w-5 text-foreground/70 transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-foreground">Contact</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>Delhi, India</li>
              <li>
                <a href="mailto:ishaana612@gmail.com" className="hover:text-primary">
                  athreya981@gmail.com
                </a>
              </li>
              <li>+91 9555631308</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary/20 pt-8 text-center text-sm text-foreground/50">
          &copy; {new Date().getFullYear()} CosmicPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
