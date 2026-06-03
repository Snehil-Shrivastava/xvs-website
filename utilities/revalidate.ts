import { revalidatePath } from "next/cache";
import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

// This function returns a hook that revalidates specific paths
export const revalidateTag =
  (paths: string[]): CollectionAfterChangeHook & CollectionAfterDeleteHook =>
  ({ doc }) => {
    paths.forEach((path) => {
      // If the path contains a slug placeholder, replace it with the actual doc slug
      const targetPath = path.includes("[slug]")
        ? path.replace("[slug]", doc.slug)
        : path;

      revalidatePath(targetPath);
      console.log(`Revalidated: ${targetPath}`);
    });

    return doc;
  };
