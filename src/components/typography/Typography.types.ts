import type { ReactNode } from "react";

interface Props {
    className?: string;
    tagClassName?: string;
    bold?: boolean;
    children: ReactNode;
    HTMLContent?: string;
}

export type TypographyProps<T> = (T extends React.ComponentType<infer P>
    ? P & { tag?: React.JSXElementConstructor<P> }
    : T extends keyof JSX.IntrinsicElements
      ? JSX.IntrinsicElements[T] & {
            tag?: T;
        }
      : never) &
    Props;

export type OmittedTagProps<T> = Omit<TypographyProps<T>, "tag">;
