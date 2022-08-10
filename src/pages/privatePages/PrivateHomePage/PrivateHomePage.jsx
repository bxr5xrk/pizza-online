import React from "react";
import st from "./PrivateHomePage.module.scss";

const PrivateHomePage = () => {
    return (
        <>
            <img
                className={st.pizza}
                src="../img/pizza_home_compressed.png"
                alt="logo"
            />

            <img
                className={st.sushi}
                src="../img/sushi_home_compressed.png"
                alt="logo"
            />
        </>
    );
};

export default PrivateHomePage;
