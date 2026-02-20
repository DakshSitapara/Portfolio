"use client";

import { useState } from "react";
import { ProjectDialog } from "./create-projects";
import { Button } from "@/components/ui/button";
import { ViewProjects } from "./view-projects";
import { useGetProjects } from "../hooks/projects";
import { Plus } from "lucide-react";
import { Doc } from "@/convex/_generated/dataModel";

export const Projects = () => {
  const [open, setOpen] = useState(false);

  const [project, setProject] = useState<Doc<"projects"> | undefined>(undefined);
  const projects = useGetProjects();

  const handleCreate = () => {
    setProject(undefined);
    setOpen(true);
  };

  const handleEdit = ( project: Doc<"projects">) => {
    setProject(project);
    setOpen(true);
  };

  return (
    <>
      <ProjectDialog
        open={open}
        setOpen={setOpen}
        project={project}
      />

      <section className="min-h-screen px-6 py-20 bg-background">
        <div className="w-auto mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">My Projects</h2>
              <p className="text-muted-foreground mt-2">
                A collection of my recent work and experiments.
              </p>
            </div>

            <Button onClick={handleCreate} className="gap-2" size="lg">
              <Plus size={18} />
              Create Project
            </Button>
          </div>

          {!projects?.length ? (
            <div className="flex flex-col items-center justify-center border border-dashed rounded-2xl p-16 text-center bg-muted/30 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">No projects yet</h3>
              <p className="text-muted-foreground mt-2 mb-6">
                Start building your portfolio by adding your first project.
              </p>
              <Button onClick={handleCreate} className="gap-2">
                <Plus size={16} />
                Create First Project
              </Button>
            </div>
          ) : (
            <ViewProjects onEdit={handleEdit} />
          )}
        </div>
      </section>
    </>
  );
};