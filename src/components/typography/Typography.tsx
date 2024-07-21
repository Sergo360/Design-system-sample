/* eslint-disable react-refresh/only-export-components */
import cx from "classnames";
import { memo } from "react";
import type { ElementType } from "react";
import { OmittedTagProps, TypographyProps } from "./Typography.types";
import s from "./typography.module.scss";

const TypographyComponent = <T = "p",>({
    tag,
    tagClassName,
    className = "",
    bold,
    children,
    HTMLContent,
    ...rest
}: TypographyProps<T>) => {
    const Tag = (tag ?? "p") as ElementType;

    return (
        <Tag
            className={cx(
                s.typography,
                s[tagClassName ?? (tag as any)],
                className,
                bold && s.bold,
            )}
            {...rest}
            {...(HTMLContent
                ? { dangerouslySetInnerHTML: { __html: HTMLContent } }
                : null)}
        >
            {children}
        </Tag>
    );
};

export const Typography = memo(
    TypographyComponent,
) as unknown as typeof TypographyComponent;

export const H1 = memo(({ ...props }: OmittedTagProps<"h1">) => (
    <TypographyComponent tag="h1" {...props} />
));
export const H2 = memo(({ ...props }: OmittedTagProps<"h2">) => (
    <TypographyComponent tag="h2" {...props} />
));
export const H3 = memo(({ ...props }: OmittedTagProps<"h3">) => (
    <TypographyComponent tag="h3" {...props} />
));
export const H4 = memo(({ ...props }: OmittedTagProps<"h4">) => (
    <TypographyComponent tag="h4" {...props} />
));
export const P = memo(({ ...props }: OmittedTagProps<"p">) => (
    <TypographyComponent tag="p" {...props} />
)) as unknown as typeof Typography<"p">;
export const Span = memo(({ ...props }: OmittedTagProps<"span">) => (
    <TypographyComponent tag="span" {...props} />
));

export const Test = ({ ...props }: OmittedTagProps<"span">) => (
    <TypographyComponent tag="span" {...props} />
);
