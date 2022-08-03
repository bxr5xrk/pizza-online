import React from "react";
import st from "./Button.module.scss";

const Button = ({ children, appearance, ...props }) => {

    return (
        <button
            className={`${st.button} ${
                appearance === "primary" ? st.primary : st.ghost
            }`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
