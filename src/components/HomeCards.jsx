import React from "react";
import st from "../pages/publicPages/HomePage/HomePage.module.scss";
import { Link } from "react-router-dom";

const cards = [
    {
        id: 1,
        href: "../img/pizza_home_compressed.png",
        size: 170,
        class: st.pizza,
        title: "Піца",
        pizza: "Пепероні",
        price: "Від 135 грн",
        link: "/pizzas/p=1",
    },
    {
        id: 2,
        href: "../img/sushi_home_compressed.png",
        size: 150,
        class: st.sushi,
        title: "Суші",
        pizza: 'Сет "кура"',
        price: "Від 330 грн",
        link: "/",
    },
];

const HomeCards = () => {
    return (
        <div className={st.cards}>
            {cards.map((i) => (
                <div className={st.card} key={i.id}>
                    <img
                        src={i.href}
                        alt={i.title}
                        width={i.size}
                        height={i.size}
                        className={i.class}
                    />
                    <h3>{i.title}</h3>
                    <p>{i.pizza}</p>
                    <p>{i.price}н</p>
                    <Link to={i.link}>
                        <span>Перейти</span>
                    </Link>
                    {i.title === "Суші" && <p className={st.soon}>скоро</p>}
                </div>
            ))}
        </div>
    );
};

export default HomeCards;
