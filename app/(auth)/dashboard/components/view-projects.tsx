

import { Button } from "@/components/ui/button";
import { useGetProjects, useDeleteProject } from "../hooks/projects";
import { ExternalLinkIcon, Github, PencilIcon, Trash2 } from "lucide-react";
import Link from "next/link";
import { Doc } from "@/convex/_generated/dataModel";

interface ViewProjectsProps {
  onEdit: (project: Doc<"projects">) => void;
}

export const ViewProjects = ({ onEdit }: ViewProjectsProps) => {
  const projects = useGetProjects();
  const { deleteProject } = useDeleteProject();

  if (!projects?.length) {
    return <div className="p-8 text-muted-foreground">No projects found.</div>;
  }

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-sm text-muted-foreground">{projects.length} total</p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="group border rounded-2xl bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="p-5 space-y-3">
              <h2 className="text-lg font-semibold line-clamp-1">
                {project.name}
              </h2>

              <div className="flex items-center justify-between pt-4">
                <div className="flex gap-3">
                  <Link href={project.demoLink} target="_blank">
                    <Button size="sm" variant="secondary" className="gap-2">
                      Demo
                      <ExternalLinkIcon size={14} />
                    </Button>
                  </Link>

                  <Link href={project.githubLink} target="_blank">
                    <Button size="sm" variant="outline" className="gap-2">
                      GitHub
                      <Github size={14} />
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={() => {
                      onEdit(project);
                    }}
                  >
                    <PencilIcon size={16} />
                  </Button>

                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => deleteProject(project._id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
