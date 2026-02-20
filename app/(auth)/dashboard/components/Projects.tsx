"use client";

import { useState } from "react";
import { ProjectDialog } from "./create-projects";
import { Button } from "@/components/ui/button";
import { ViewProjects } from "./view-projects";
import { useGetProjects } from "../hooks/projects";
import { Plus } from "lucide-react";
import { Doc } from "@/convex/_generated/dataModel";
import { Spinner } from "@/components/ui/spinner";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { FolderCode } from "lucide-react";

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Spinner className="mb-4 size-8" />
      <p className="text-lg text-muted-foreground">Loading projects...</p>
    </div>
  );
};

const EmptyState = ({ onCreate }: { onCreate: () => void }) => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button onClick={onCreate} className="gap-2">
          <Plus size={16} />
          Create First Project
        </Button>
      </EmptyContent>
    </Empty>
  );
};

export const Projects = () => {
  const projects = useGetProjects();

  const [open, setOpen] = useState(false);

  const [project, setProject] = useState<Doc<"projects"> | undefined>(
    undefined,
  );
  const handleCreate = () => {
    setProject(undefined);
    setOpen(true);
  };

  const handleEdit = (project: Doc<"projects">) => {
    setProject(project);
    setOpen(true);
  };

  return (
    <>
      <ProjectDialog open={open} setOpen={setOpen} project={project} />

      <section className="min-h-auto px-6 bg-background">
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

          {projects === undefined ? (
            <div className="min-h-[50vh] flex items-center justify-center">
              <LoadingState />
            </div>
          ) : projects.length === 0 ? (
            <div className="min-h-[50vh] flex items-center justify-center">
              <EmptyState onCreate={handleCreate} />
            </div>
          ) : (
            <ViewProjects onEdit={handleEdit} />
          )}
        </div>
      </section>
    </>
  );
};
