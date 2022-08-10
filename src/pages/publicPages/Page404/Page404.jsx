import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button/Button";
import st from "./Page404.module.scss";

const Page404 = () => {
    return (
        <div className={st.notFound}>
            <h1>404</h1>
            <h2>Дана сторінка відсутня. :(</h2>
            <Link to="/">
                <Button appearance="grey">Перейти на головну</Button>
            </Link>
        </div>
    );
};

export default Page404;
