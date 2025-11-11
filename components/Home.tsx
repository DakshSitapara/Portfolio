'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Cloud } from './IconCloud'
import { Meteors } from './ui/meteors'
import { TypingAnimation } from './ui/typing-animation'
import { Highlighter } from './ui/highlighter'

export default function Home() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 bg-background overflow-hidden">

      <Meteors number={30} />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between max-w-screen-2xl w-full gap-8">

        <div className="flex-1 order-1 md:order-1 text-center md:text-left space-y-6">
          <div className="flex flex-col items-center md:items-start max-w-3xl mx-auto px-4 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-foreground">
              <TypingAnimation>
                Hi, I’m Daksh Sitapara 👋
              </TypingAnimation>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              I’m a{" "}
              <Highlighter action="underline" color="#FF9800">
                Front-End Developer
              </Highlighter>{" "}
              specializing in{" "}
              <Highlighter action="circle" color="#87CEFA">
                React.js
              </Highlighter>{" "}
              and{" "}
              <Highlighter action="circle" color="#ffd1dc">
                Next.js
              </Highlighter>
              . I love building modern, responsive web apps using{" "}
              <Highlighter action="box" color="#ffd1dc">
                TypeScript
              </Highlighter>
              ,{" "}
              <Highlighter action="box" color="#87CEFA">
                Tailwind CSS
              </Highlighter>
              , and{" "}
              <Highlighter action="highlight" color="#D9D9D955">
                shadcn/ui
              </Highlighter>
              .
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              <Link href="#projects">
                <Button size="lg" className="font-medium">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end order-2 md:order-2 mb-8 md:mb-0">
          <Cloud />
        </div>

      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-radial from-transparent to-blue-50 dark:to-gray-900" />

    </section>
  )
}
