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

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";

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

  const isEmpty = !form.name || !form.demoLink || !form.githubLink;

  const isChanged = isEditMode
    ? form.name !== project?.name ||
      form.demoLink !== project?.demoLink ||
      form.githubLink !== project?.githubLink
    : true;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
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
    } catch (error) {
      console.error(error);
    }
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
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Project Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="demo-link">Live Demo Link</FieldLabel>
                <Input
                  id="demo-link"
                  type="text"
                  placeholder="Live Demo Link"
                  value={form.demoLink}
                  onChange={(e) =>
                    setForm({ ...form, demoLink: e.target.value })
                  }
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="github-link">Github Repo Link</FieldLabel>
                <Input
                  id="github-link"
                  type="text"
                  placeholder="Github Repo Link"
                  value={form.githubLink}
                  onChange={(e) =>
                    setForm({ ...form, githubLink: e.target.value })
                  }
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={isEmpty || (isEditMode && !isChanged)}
            >
              {isEditMode ? "Update" : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
