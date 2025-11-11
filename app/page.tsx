'use client'

import {Navbar} from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import {ScrollProgress} from '@/components/ui/scroll-progress'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <ScrollProgress />

      <main className="flex-1">
        <section id="home" className="scroll-mt-20">
          <Home />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <footer className="text-center py-6 border-t text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  )
}
