"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Id } from "@/convex/_generated/dataModel";

export const useCreateProject = () => {
  const mutation = useMutation(api.projects.createProject);

  const createProject = async (data: {
    name: string;
    description?: string;
    demoLink: string;
    githubLink: string;
    image?: string;
  }) => {
    try {
      await mutation(data);
      toast.success("Project created successfully 🚀");
    } catch (error) {
      toast.error("Failed to create project");
      console.error(error);
    }
  };

  return { createProject };
};

export const useGetProjects = () => {
  const getProjects = useQuery(api.projects.getProjects);
  return getProjects;
};

export const useDeleteProject = () => {
  const mutation = useMutation(api.projects.deleteProject);

  const deleteProject = async (id: Id<"projects">) => {
    try {
      await mutation({ id });
      toast.success("Project deleted successfully 🗑️");
    } catch (error) {
      toast.error("Failed to delete project");
      console.error(error);
    }
  };

  return { deleteProject };
};

export const useUpdateProject = () => {
  const mutation = useMutation(api.projects.updateProject);

  const updateProject = async (data: {
    id: Id<"projects">;
    name: string;
    description?: string;
    demoLink: string;
    githubLink: string;
    image?: string;
  }) => {
    try {
      await mutation(data);
      toast.success("Project updated successfully 🚀");
    } catch (error) {
      toast.error("Failed to update project");
      console.error(error);
    }
  };

  return { updateProject };
};
