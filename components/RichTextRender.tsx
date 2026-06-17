import {
  defaultJSXConverters,
  RichText as RichTextConverter,
  type JSXConverters,
} from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

type LinkFields = {
  url?: string;
  newTab?: boolean;
  rel?: string[];
  linkType?: "custom" | "internal";
};

const jsxConverters: JSXConverters = {
  ...defaultJSXConverters,
  link: ({ node, nodesToJSX }) => {
    const fields = node.fields as LinkFields;

    // Start with whatever rel values are already stored on the node,
    // then merge in noopener/noreferrer if it opens in a new tab.
    const relValues = new Set<string>(fields.rel ?? []);
    if (fields.newTab) {
      relValues.add("noopener");
      relValues.add("noreferrer");
    }

    const rel = relValues.size > 0 ? [...relValues].join(" ") : undefined;

    return (
      <a
        href={fields.url ?? ""}
        target={fields.newTab ? "_blank" : undefined}
        rel={rel}
      >
        {nodesToJSX({ nodes: node.children })}
      </a>
    );
  },
};

type Props = {
  data: SerializedEditorState;
} & React.HTMLAttributes<HTMLDivElement>;

export const RichText = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <RichTextConverter
      {...rest}
      className={className}
      converters={jsxConverters}
    />
  );
};
