'use client'

import { 
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { projects } from '@/data/data'
import Image from "next/image"
import { Marquee } from '@/components/ui/marquee'

export default function Projects() {
  return (
    <section className="w-full mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Projects</h1>

      <div className="relative w-full overflow-hidden">
        <Marquee pauseOnHover>
          {projects.map((project) => (
            <Card key={project.id} className="w-auto flex shrink-0 shadow-lg">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardContent>

              <div className="flex flex-wrap gap-2 mb-4 px-4 mt-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <CardFooter className="mt-2 flex space-x-4 px-4 pb-2">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm"
                >
                  GitHub
                </a>
              </CardFooter>
            </Card>
          ))}
        </Marquee>

        {/* Optional gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background"></div>
      </div>
    </section>
  )
}
