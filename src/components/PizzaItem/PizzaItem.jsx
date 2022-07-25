import React from "react";
import { Link } from "react-router-dom";
import PizzaSizeAndType from "../PizzaSizeAndType/PizzaSizeAndType";

const PizzaItem = ({ id, title, image, edges, sizes }) => {
    return (
        <div>
            <Link to={`/pizza/${id}`}>
                <h2>{title}</h2>
                <img src={image} alt={title} width="250" height="250" />
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
