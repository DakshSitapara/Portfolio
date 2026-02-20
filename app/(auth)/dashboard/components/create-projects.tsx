"use client";

import { useEffect, useState } from "react";
import { useCreateProject, useUpdateProject } from "../hooks/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";

interface ProjectDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  project?: Doc<"projects">;
}

export const ProjectDialog = ({
  open,
  setOpen,
  project,
}: ProjectDialogProps) => {
  const { createProject } = useCreateProject();
  const { updateProject } = useUpdateProject();

  const isEditMode = !!project;

  const [form, setForm] = useState({
    name: "",
    demoLink: "",
    githubLink: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditMode && project) {
      await updateProject({
        id: project._id,
        ...form,
      });
    } else {
      await createProject(form);
    }

    setOpen(false);

    setForm({
      name: "",
      demoLink: "",
      githubLink: "",
    });
  };

  useEffect(() => {
    if (project) {
      setForm({
        name: project.name,
        demoLink: project.demoLink,
        githubLink: project.githubLink,
      });
    }
    if (!project) {
      setForm({
        name: "",
        demoLink: "",
        githubLink: "",
      });
    }
  }, [project]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? "Update Project" : "Create Project"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Project Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            placeholder="Demo Link"
            value={form.demoLink}
            onChange={(e) => setForm({ ...form, demoLink: e.target.value })}
            required
          />
          <Input
            placeholder="GitHub Link"
            value={form.githubLink}
            onChange={(e) => setForm({ ...form, githubLink: e.target.value })}
            required
          />
          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button type="submit">{isEditMode ? "Update" : "Create"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
