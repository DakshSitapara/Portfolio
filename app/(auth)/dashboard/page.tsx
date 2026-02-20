import { UserButton } from "@clerk/nextjs";
import { Projects } from "./components/Projects";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      
      <header className="border-b bg-background/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your portfolio projects
            </p>
          </div>

          <div className="flex items-center gap-4">
            <AnimatedThemeToggler />
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <Projects />
      </main>
    </div>
  );
}