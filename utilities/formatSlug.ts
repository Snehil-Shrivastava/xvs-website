// Utility to format the string into a slug
const format = (val: string): string =>
  val
    .replace(/ /g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars (like @, /, etc.)
    .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
    .toLowerCase() // Convert to lowercase
    .trim();

import { FieldHook } from "payload";

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    // If the slug field already has a value, format it (in case user typed it manually)
    if (typeof value === "string" && value.length > 0) {
      return format(value);
    }

    // Otherwise, look at the fallback field (usually 'title')
    const fallbackData = data?.[fallback] || originalDoc?.[fallback];

    if (fallbackData && typeof fallbackData === "string") {
      return format(fallbackData);
    }

    return value;
  };
