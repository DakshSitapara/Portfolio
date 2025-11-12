'use client'

import Link from 'next/link'
import { BorderBeam } from './ui/border-beam'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function ContactCard() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">
        Get In Touch
      </h2>
      <p className="text-muted-foreground mb-8 sm:mb-10 text-lg sm:text-xl max-w-2xl mx-auto">
        I’m always open to discuss your project, idea, or just to say hello. You can reach me through any of the links below.
      </p>

      <Card className="relative w-full max-w-md border-none shadow-xl mx-auto rounded-2xl overflow-hidden bg-transparent">
        <CardHeader className="border-border border-b p-4 sm:p-6 text-center">
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Contact Me
          </CardTitle>
          <CardDescription className="mt-1 text-sm sm:text-base text-muted-foreground">
            Let’s connect! Here’s how you can reach me:
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 flex justify-center gap-4">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full border shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110"
          >
            <Link href="mailto:dakshsitapara@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6" />
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full border shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110"
          >
            <a href="https://linkedin.com/in/dakshsitapara" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full border shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110"
          >
            <a href="https://github.com/dakshsitapara" target="_blank" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
          </Button>
        </CardContent>


        <BorderBeam
          duration={6}
          size={400}
          className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
          duration={6}
          delay={3}
          size={400}
          borderWidth={2}
          className="from-transparent via-blue-500 to-transparent"
        />
      </Card>
    </section>
  )
}
