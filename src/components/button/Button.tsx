import cx from "classnames";
import { removeSpecialProps, useConst } from "src/helpers/consts";
import classes from "./Button.module.scss";
import {forwardRef, LegacyRef, memo} from "react";

const ButtonComponent = (
    { children, disabled, loading, ...props },
    ref: LegacyRef<HTMLButtonElement>,
): JSX.Element => {
    const { size, color } = useConst(props);
    return (
        <button
            {...removeSpecialProps(props)}
            ref={ref}
            disabled={disabled || loading}
            className={cx(
                classes.wrapper,
                size ? classes[`size-${size}`] : classes["size-md"],
                color ? classes[`color-${color}`] : classes["color-primary"],
            )}
        >
            {children}
        </button>
    );
};

export const Button = memo(
    forwardRef(ButtonComponent),
) as typeof ButtonComponent;
