/* eslint-disable react-refresh/only-export-components */
import cx from "classnames";
import { memo } from "react";
import type { ElementType } from "react";
import { OmittedTagProps, TypographyProps } from "./Typography.types";
import s from "./typography.module.scss";

const TypographyComponent = ({
    tag,
    tagClassName,
    className = "",
    bold,
    children,
    ...rest
}: TypographyProps) => {
    const Tag = (tag ?? "p") as ElementType;

    return (
        <Tag
            className={cx(
                s.typography,
                tagClassName && s[tagClassName],
                className,
                bold && s.bold,
            )}
            {...rest}
        >
            {children}
        </Tag>
    );
};

export const Typography = memo(TypographyComponent);

export const H1 = memo(({ children, ...props }: OmittedTagProps) => (
    <TypographyComponent tag="h1" {...props}>
        {children}
    </TypographyComponent>
));
export const H2 = memo(({ children, ...props }: OmittedTagProps) => (
    <TypographyComponent tag="h2" {...props}>
        {children}
    </TypographyComponent>
));
export const H3 = memo(({ children, ...props }: OmittedTagProps) => (
    <TypographyComponent tag="h3" {...props}>
        {children}
    </TypographyComponent>
));
export const H4 = memo(({ children, ...props }: OmittedTagProps) => (
    <TypographyComponent tag="h4" {...props}>
        {children}
    </TypographyComponent>
));
export const P = memo(({ children, ...props }: OmittedTagProps) => (
    <TypographyComponent tag="p" {...props}>
        {children}
    </TypographyComponent>
));
export const Span = memo(({ children, ...props }: OmittedTagProps) => (
    <TypographyComponent tag="span" {...props}>
        {children}
    </TypographyComponent>
));
