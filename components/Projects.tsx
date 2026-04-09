"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LinkImage } from "../components/LinkImage";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ExternalLinkIcon, Github } from "lucide-react";
import { useGetProjects } from "@/app/(auth)/dashboard/hooks/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

export default function Projects() {
  const projects = useGetProjects();
  const plugin = useRef(
    AutoScroll({ speed: 2, stopOnInteraction: false, stopOnMouseEnter: true }),
  );

  return (
    <section className="w-full mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-xl font-bold text-center mb-8 md:mb-12">
        Projects
      </h1>

      <div className="relative w-full overflow-hidden">
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true, dragFree: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects?.map((project) => (
              <CarouselItem
                key={project._id}
                className="pl-4 basis-[90%] sm:basis-[55%] md:basis-[42%] lg:basis-[32%] xl:basis-[28%]"
              >
                <Card className="shadow-lg p-0 transform transition-transform duration-300 hover:scale-[1.03] hover:z-10">
                  <CardContent className="relative p-0 shadow-none overflow-hidden rounded-md">
                    <div className="w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden rounded-md">
                      <LinkImage
                        url={project.demoLink}
                        width={550}
                        height={325}
                        isStatic={false}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <span className="absolute top-3 left-3 z-10 text-xs sm:text-sm font-semibold text-white bg-black/40 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-md shadow-md">
                      {project.name}
                    </span>

                    <div className="absolute bottom-3 left-0 right-0 flex justify-between px-3 sm:px-4 z-10">
                      <HoverBorderGradient
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

                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent rounded-md pointer-events-none" />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background hidden sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background hidden sm:block" />
      </div>
    </section>
  );
}
