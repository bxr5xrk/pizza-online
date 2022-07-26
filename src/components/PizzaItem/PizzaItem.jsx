import React from "react";
import { Link } from "react-router-dom";
import PizzaSizeAndType from "../PizzaParams/PizzaParams";
import st from "../PizzaList/PizzaList.module.scss";

const PizzaItem = ({ id, title, image, edges, sizes }) => {
    return (
        <div className={st.item}>
            <Link to={`/pizza/${id}`}>
                <img src={image} alt={title} width="250" height="250" />
                <h2>{title}</h2>
            </Link>

            <PizzaSizeAndType
                sizes={sizes}
                edges={edges}
                id={id}
                title={title}
                image={image}
            />
        </div>
    );
};

export default PizzaItem;
