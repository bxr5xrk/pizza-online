import React from "react";
import { Link } from "react-router-dom";

const PizzaItem = ({ id, title, price, imageUrl }) => {

    return (
        <div>
            <Link to={`/pizza/${id}`}>
                <h2>{title}</h2>
                <img src={imageUrl} alt={title} width="250" height="250" />
            </Link>

            <h4>{price}</h4>
        </div>
    );
};

export default PizzaItem;
