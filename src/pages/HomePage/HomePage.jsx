import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import st from "./HomePage.module.scss";
const Slider = React.lazy(() => import("../../components/Slider/Slider"));
const HomeCards = React.lazy(() => import("../../components/HomeCards"));

const HomePage = () => {
    document.title = "Pizza online";

    return (
        <section className={st.home}>
            <h1>PIZZA ONLINE</h1>

            <Suspense fallback={<p className="homeLoading">Завантаження...</p>}>
                <HomeCards />
                <Slider />
            </Suspense>

            <Link to="/login">
                <Button appearance="primary">Увійти в особистий кабінет</Button>
            </Link>
        </section>
    );
};

export default HomePage;
