enum COLOR {
    primary,
    white,
    accent,
    light,
    secondary,
    success,
    gray,
    dark,
    failure,
    warning,
}

enum LAYOUT {
    xxs,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    stretch,
}

export type LayoutType = (typeof LAYOUT)[keyof typeof LAYOUT];
export type ColorType = (typeof COLOR)[keyof typeof COLOR];

export const useConst = (props: Record<string, unknown>) => {
    return Object.keys(props).reduce(
        (state: Record<string, unknown>, propName: string) => {
            if (propName in COLOR) {
                return { ...state, color: propName };
            }
            if (propName in LAYOUT) {
                return { ...state, layout: propName };
            }
            return state;
        },
        {},
    );
};

export const removeSpecialProps = (props: Record<string, unknown>) => {
    const newProps: Record<string, unknown> = { ...props };

    Object.keys(newProps).forEach((propName: string) => {
        if (propName in COLOR || propName in LAYOUT) {
            delete newProps[propName];
        }
    });

    return newProps;
};
