import React from "react";
import st from "../pages/HomePage/HomePage.module.scss";
import { Link } from "react-router-dom";

const HomeCards = () => {
    return (
        <div className={st.cards}>
            <div className={st.card}>
                <img
                    src="../img/pizza_home_compressed.png"
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
                    src="../img/sushi_home_compressed.png"
                    alt="sushi"
                    width={150}
                    height={150}
                />
                <h3>Суші</h3>
                <p>Сет "кура"</p>
                <p>Від 330 грн</p>
                <Link to="/">
                    <span>Перейти</span>
                </Link>
                <p className={st.soon}>скоро</p>
            </div>
        </div>
    );
};

export default HomeCards;
