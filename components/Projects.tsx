"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LinkImage } from "../components/LinkImage";
import { Marquee } from "@/components/ui/marquee";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ExternalLinkIcon, Github } from "lucide-react";
import { useGetProjects } from "@/app/(auth)/dashboard/hooks/projects";

export default function Projects() {
  const projects = useGetProjects();

  if (!projects) {
    return null;
  }

  return (
    <section className="w-full mx-auto px-4 py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
        Projects
      </h1>

      <div className="relative w-full overflow-hidden">
        <Marquee pauseOnHover>
          {projects.map((project) => (
            <Card
              key={project._id}
              className="flex shrink-0 shadow-lg p-0 transform transition-transform duration-300 hover:scale-[1.03] hover:z-10 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[550px]"
            >
              <CardContent className="relative p-0 shadow-none">
                <LinkImage
                  url={project.demoLink}
                  width={550}
                  height={325}
                  isStatic={false}
                  className="w-full h-auto max-h-[220px] sm:max-h-[280px] md:max-h-[325px] rounded-md object-cover"
                />

                <span className="absolute top-3 left-3 z-10 text-xs sm:text-sm font-semibold text-white bg-black/40 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-md shadow-md">
                  {project.name}
                </span>

                <div className="absolute bottom-3 left-0 right-0 flex justify-between px-3 sm:px-4 z-10">
                  <HoverBorderGradient
                    title="Live Demo"
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center"
                  >
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLinkIcon size={16} />
                    </Link>
                  </HoverBorderGradient>

                  <HoverBorderGradient
                    title="Github"
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center"
                  >
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                    </Link>
                  </HoverBorderGradient>
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent rounded-md pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background hidden sm:block"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background hidden sm:block"></div>
      </div>
    </section>
  );
}
