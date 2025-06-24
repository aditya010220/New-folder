// "use client"

// import type React from "react"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Github, Linkedin, Twitter, Mail, Send, MapPin, Phone } from "lucide-react"

// export default function Contact() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormState((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false)
//       setIsSubmitted(true)
//       setFormState({ name: "", email: "", message: "" })

//       // Reset success message after 5 seconds
//       setTimeout(() => {
//         setIsSubmitted(false)
//       }, 5000)
//     }, 1500)
//   }

//   return (
//     <section id="contact" className="relative py-20">
//       <div className="planet planet-5" style={{ top: "10%", right: "5%", width: "40px", height: "40px" }}></div>
//       <div className="planet planet-2" style={{ bottom: "20%", left: "10%", width: "60px", height: "60px" }}></div>

//       <div className="container px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mx-auto max-w-6xl"
//         >
//           <div className="mb-12 text-center">
//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl cosmic-gradient">Contact Me</h2>
//             <p className="mt-4 text-lg text-foreground/80">Let&apos;s collaborate on your next cosmic project</p>
//           </div>
//           <div className="grid gap-10 md:grid-cols-2">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold cosmic-gradient">Get in Touch</h3>
//                 <p className="text-foreground/80">
//                   I&apos;m currently available for freelance work, collaborations, and interesting projects. Feel free
//                   to reach out if you have any questions or just want to say hi!
//                 </p>

//                 <div className="space-y-4 pt-4">
//                   <div className="flex items-center space-x-3 text-foreground/80">
//                     <MapPin className="h-5 w-5 text-primary" />
//                     <span>Delhi, India</span>
//                   </div>
//                   <div className="flex items-center space-x-3 text-foreground/80">
//                     <Mail className="h-5 w-5 text-primary" />
//                     <a href="mailto:ishaana612@gmail.com" className="hover:text-primary">
//                       athreya981@gmail.com
//                     </a>
//                   </div>
//                   <div className="flex items-center space-x-3 text-foreground/80">
//                     <Phone className="h-5 w-5 text-primary" />
//                     <span>+91 9555631308</span>
//                   </div>
//                 </div>

//                 <div className="flex space-x-4 pt-4">
//                   <Button
//                     size="icon"
//                     variant="outline"
//                     className="border-primary/30 text-foreground/100 "
//                     asChild
//                   >
//                     <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//                       <Github className="h-5 w-5" />
//                     </a>
//                   </Button>
//                   <Button
//                     size="icon"
//                     variant="outline"
//                     className="border-primary/30 text-foreground/80 hover:text-primary"
//                     asChild
//                   >
//                     <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                       <Linkedin className="h-5 w-5" />
//                     </a>
//                   </Button>
//                   <Button
//                     size="icon"
//                     variant="outline"
//                     className="border-primary/30 text-foreground/80 hover:text-primary"
//                     asChild
//                   >
//                     <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//                       <Twitter className="h-5 w-5" />
//                     </a>
//                   </Button>
//                 </div>

               
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//             >
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm font-medium text-foreground/80">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formState.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     required
//                     className="border-primary/30 bg-card/50 text-foreground placeholder:text-foreground/50 focus:border-primary"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium text-foreground/80">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formState.email}
//                     onChange={handleChange}
//                     placeholder="Your email"
//                     required
//                     className="border-primary/30 bg-card/50 text-foreground placeholder:text-foreground/50 focus:border-primary"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-medium text-foreground/80">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formState.message}
//                     onChange={handleChange}
//                     placeholder="Your message"
//                     rows={5}
//                     required
//                     className="border-primary/30 bg-card/50 text-foreground placeholder:text-foreground/50 focus:border-primary"
//                   />
//                 </div>
//                 <Button
//                   type="submit"
//                   className="w-full bg-primary text-white hover:bg-primary/80"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     "Sending..."
//                   ) : (
//                     <>
//                       Send Message
//                       <Send className="ml-2 h-4 w-4" />
//                     </>
//                   )}
//                 </Button>
//                 {isSubmitted && (
//                   <p className="text-center text-sm text-green-500">
//                     Thank you for your message! I&apos;ll get back to you soon.
//                   </p>
//                 )}
//               </form>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, Mail, Send, MapPin, Phone } from "lucide-react"

// API base URL - adjust based on your setup
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", message: "" })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        setError(data.message || 'Failed to send message')
      }
    } catch (err) {
      console.error('Contact form error:', err)
      setError('Network error. Please check if the server is running.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="planet planet-5" style={{ top: "10%", right: "5%", width: "40px", height: "40px" }}></div>
      <div className="planet planet-2" style={{ bottom: "20%", left: "10%", width: "60px", height: "60px" }}></div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl cosmic-gradient">Contact Me</h2>
            <p className="mt-4 text-lg text-foreground/80">Let&apos;s collaborate on your next cosmic project</p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold cosmic-gradient">Get in Touch</h3>
                <p className="text-foreground/80">
                  I&apos;m currently available for freelance work, collaborations, and interesting projects. Feel free
                  to reach out if you have any questions or just want to say hi!
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-3 text-foreground/80">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Delhi, India</span>
                  </div>
                  <div className="flex items-center space-x-3 text-foreground/80">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:athreya981@gmail.com" className="hover:text-primary">
                      athreya981@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-foreground/80">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+91 9555631308</span>
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary/30 text-foreground/100 "
                    asChild
                  >
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary/30 text-foreground/80 hover:text-primary"
                    asChild
                  >
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="border-primary/30 text-foreground/80 hover:text-primary"
                    asChild
                  >
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-primary/30 bg-card/50 text-foreground placeholder:text-foreground/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="border-primary/30 bg-card/50 text-foreground placeholder:text-foreground/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    className="border-primary/30 bg-card/50 text-foreground placeholder:text-foreground/50 focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/80"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                
                {/* Success Message */}
                {isSubmitted && (
                  <div className="text-center p-3 bg-green-500/10 border border-green-500/20 rounded-md">
                    <p className="text-sm text-green-500">
                      ✓ Thank you for your message! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
                
                {/* Error Message */}
                {error && (
                  <div className="text-center p-3 bg-red-500/10 border border-red-500/20 rounded-md">
                    <p className="text-sm text-red-500">
                      ✗ {error}
                    </p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}