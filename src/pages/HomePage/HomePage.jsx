import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import st from "./HomePage.module.scss";

const HomePage = () => {
    document.title = "Pizza online";

    return (
        <section className={st.home}>
            <h1>PIZZA ONLINE</h1>

            <div className={st.cards}>
                <div className={st.card}>
                    <img
                        src="../img/pizza_home.png"
                        alt="pizza"
                        width={170}
                        height={170}
                        className={st.pizza}
                    />
                    <h3>Піца</h3>
                    <p>Пепероні</p>
                    <p>Від 135 грн</p>
                    <Link to="/pizzas/p=1">
                        <span>Перейти</span>
                    </Link>
                </div>
                <div
                    className={st.card}
                    animate={{ scale: [0, 1] }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="../img/sushi_home.png"
                        alt="sushi"
                        width={160}
                        height={160}
                    />
                    <h3>Суші</h3>
                    <p>Сет "Сакура"</p>
                    <p>Від 330 грн</p>
                    <Link to="/">
                        <span>Перейти</span>
                    </Link>
                    <p className={st.soon}>скоро</p>
                </div>
            </div>
            <Link to="/login">
                <Button appearance="primary">Увійти в особистий кабінет</Button>
            </Link>
        </section>
    );
};

export default HomePage;
