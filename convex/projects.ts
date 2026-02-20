import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createProject = mutation({
  args: {
    name: v.string(),
    demoLink: v.string(),
    githubLink: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    if (identity.subject !== process.env.ADMIN_USER_ID) {
      throw new Error("Only admin can create project");
    }

    const existingProject = await ctx.db
      .query("projects")
      .filter((q) =>
        q.and(
          q.eq(q.field("name"), args.name),
          q.eq(q.field("demoLink"), args.demoLink),
          q.eq(q.field("githubLink"), args.githubLink),
        ),
      )
      .first();

    if (existingProject) {
      throw new Error("Project already exists");
    }

    return await ctx.db.insert("projects", {
      ...args,
      updatedAt: Date.now(),
    });
  },
});

export const getProjects = query({
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

export const deleteProject = mutation({
  args: {
    id: v.id("projects"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity || identity.subject !== process.env.ADMIN_USER_ID) {
      throw new Error("Unauthorized");
    }
    await ctx.db.delete(args.id);
  },
});

export const updateProject = mutation({
  args: {
    id: v.id("projects"),
    name: v.string(),
    demoLink: v.string(),
    githubLink: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity || identity.subject !== process.env.ADMIN_USER_ID) {
      throw new Error("Unauthorized");
    }

    if (!args.name || !args.demoLink || !args.githubLink) {
      throw new Error("All fields are required");
    }
    const existingProject = await ctx.db.get(args.id);

    if (!existingProject) {
      throw new Error("Project not found");
    }

    const isUnchanged =
      existingProject.name === args.name &&
      existingProject.demoLink === args.demoLink &&
      existingProject.githubLink === args.githubLink;

    if (isUnchanged) {
      throw new Error("No changes detected");
    }

    await ctx.db.patch(args.id, {
      name: args.name,
      demoLink: args.demoLink,
      githubLink: args.githubLink,
      updatedAt: Date.now(),
    });
  },
});
