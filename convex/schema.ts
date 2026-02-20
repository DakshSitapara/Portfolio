import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    name: v.string(),
    demoLink: v.string(),
    githubLink: v.string(),
    updatedAt: v.number(),
  }),
});
