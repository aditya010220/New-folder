"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Home, User, FolderKanban, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#", icon: <Home className="h-4 w-4 mr-1" /> },
    { name: "About", href: "#about", icon: <User className="h-4 w-4 mr-1" /> },
    { name: "Projects", href: "#projects", icon: <FolderKanban className="h-4 w-4 mr-1" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-4 w-4 mr-1" /> },
  ]

  const scrollToSection = (href: string) => {
    closeMenu()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Athreyam.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="flex items-center px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.icon}
                {link.name}
              </button>
            ))}
            <Button className="ml-4 bg-primary text-white hover:bg-primary/80" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-1" />
                Resume
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu" onClick={toggleMenu}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden",
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        )}
      >
        <nav className="container flex flex-col space-y-4 px-4 py-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="flex items-center py-2 text-base font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.icon}
              <span className="ml-2">{link.name}</span>
            </button>
          ))}
          <Button className="flex items-center bg-primary text-white hover:bg-primary/80" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-2" />
              Resume
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}