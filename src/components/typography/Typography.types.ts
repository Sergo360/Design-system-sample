import type { ReactNode } from "react";

enum TAGS {
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "span",
}

export type TypographyProps = {
    className?: string;
    tagClassName?: string;
    bold?: boolean;
    children: ReactNode;
    HTMLContent?: string;
    tag: keyof typeof TAGS;
};

export type OmittedTagProps = Omit<TypographyProps, "tag">;
