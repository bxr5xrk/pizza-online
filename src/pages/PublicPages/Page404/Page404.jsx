import React from "react";
import { Link } from "react-router-dom";
import st from "./Page404.module.scss";

const Page404 = () => {
    return (
        <div className="main">
            <div className={st.notFound}>
                <h1>404</h1>
                <h2>Дана сторінка відсутня. :(</h2>
                <Link to="/">перейти на головну</Link>
            </div>
        </div>
    );
};

export default Page404;
