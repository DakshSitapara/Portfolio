"use client"

import React from "react"
import Link from "next/link"
import { HomeIcon, FolderIcon, UserIcon, MailIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/components/ui/dock"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"

export type IconProps = React.HTMLAttributes<SVGElement>

const DATA = {
  navbar: [
    { href: "#home", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: FolderIcon, label: "Projects" },
    { href: "#about", icon: UserIcon, label: "About Me" },
    { href: "#contact", icon: MailIcon, label: "Contact" },
  ],
}

export function Navbar() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full transition-transform hover:scale-110 focus:scale-110"
                    )}

                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}

          <Separator orientation="vertical" className="h-full" />

          <AnimatedThemeToggler />

        </Dock>
      </TooltipProvider>
    </div>
  )
}
