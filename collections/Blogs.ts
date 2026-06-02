import { formatSlug } from "@/utilities/formatSlug";
import { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: { useAsTitle: "title" },
  access: { read: () => true },
  fields: [
    // ── Core Content ──────────────────────────────
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "Auto-fill from title. e.g. my-blog-post" },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      admin: {
        description: "Short description shown in cards and featured section",
      },
    },
    {
      name: "body",
      type: "richText",
      required: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },

    // ── Meta ──────────────────────────────────────
    {
      name: "publishedAt",
      type: "date",
      required: true,
      admin: { date: { pickerAppearance: "dayAndTime" } },
    },
    {
      name: "readingTime",
      type: "text",
      admin: { description: "e.g. 5 Min" },
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description: "Show this post as the featured blog on the blog page",
      },
    },

    // ── Relationships ─────────────────────────────
    {
      name: "author",
      type: "relationship",
      relationTo: "authors",
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text" }],
      admin: { description: "e.g. #industry, #design, #website" },
    },

    // ── Engagement (future-ready) ──────────────────
    {
      name: "likes",
      type: "number",
      defaultValue: 0,
      admin: {
        readOnly: true,
        description: "Managed via API — do not edit manually",
        position: "sidebar",
      },
    },
    {
      name: "views",
      type: "number",
      defaultValue: 0,
      admin: {
        readOnly: true,
        position: "sidebar",
      },
    },
    {
      name: "shares",
      type: "number",
      defaultValue: 0,
      admin: {
        readOnly: true,
        position: "sidebar",
      },
    },
  ],
};
