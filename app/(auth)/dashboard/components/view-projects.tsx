import Link from "next/link";
import { ExternalLinkIcon, Github, PencilIcon, Trash2 } from "lucide-react";

import { useGetProjects, useDeleteProject } from "../hooks/projects";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Doc } from "@/convex/_generated/dataModel";

interface ViewProjectsProps {
  onEdit: (project: Doc<"projects">) => void;
}

interface DeleteProjectDialogProps {
  projectId: string;
  onDelete: (projectId: string) => void;
}

const DeleteProjectDialog = ({
  projectId,
  onDelete,
}: DeleteProjectDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 size={16} />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            project.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction
            onClick={() => onDelete(projectId)}
            className="bg-destructive text-white hover:bg-destructive/90"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const ViewProjects = ({ onEdit }: ViewProjectsProps) => {
  const projects = useGetProjects();
  const { deleteProject } = useDeleteProject();

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-sm text-muted-foreground">
          {projects?.length} total
        </p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <Card key={project._id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold tracking-tight">
                {project.name}
              </CardTitle>
              <CardAction className="space-x-2">
                <Button onClick={() => onEdit(project)} variant="secondary">
                  <PencilIcon size={16} />
                </Button>

                <DeleteProjectDialog
                  projectId={project._id}
                  onDelete={() => deleteProject(project._id)}
                />
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-1 items-center justify-between">
              <Link href={project.demoLink} target="_blank">
                <Button size="sm" variant="secondary">
                  Demo
                  <ExternalLinkIcon size={14} />
                </Button>
              </Link>

              <Link href={project.githubLink} target="_blank">
                <Button size="sm" variant="outline">
                  GitHub
                  <Github size={14} />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
