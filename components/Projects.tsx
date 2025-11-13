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
import { LinkImage } from '../components/LinkImage'
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
                  <CardDescription>
                    <span className="text-muted-foreground text-sm line-clamp-1 hover:line-clamp-none">
                      {project.description}
                    </span>
                  </CardDescription>
              </CardHeader>

              <CardContent className="p-2">
                <LinkImage
                  url={project.demoLink}
                  width={500}
                  height={300}
                  isStatic={false}
                />
              </CardContent>

              <div className="flex flex-wrap gap-3 mb-4 px-4 mt-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-xs font-semibold bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200 rounded-full shadow-sm hover:shadow-md transition duration-300 ease-in-out"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <CardFooter className="mt-4 flex justify-between px-4 pb-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transition duration-300"
                >
                  GitHub
                </a>
              </CardFooter>

            </Card>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background"></div>
      </div>
    </section>
  )
}
