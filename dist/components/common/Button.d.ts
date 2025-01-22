/// <reference types="react" />
declare const Button: ({ onClick, content, }: {
    onClick?: (() => void) | undefined;
    content: JSX.Element | string | number;
}) => import("react/jsx-runtime").JSX.Element;
export default Button;
