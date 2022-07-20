import React from "react";
import { Link } from "react-router-dom";

const PizzaItem = ({ id, title, price }) => {
    return (
        <div>
            <Link to={`/pizza/${id}`}>
                <h2>{title}</h2>
            </Link>

            <h4>{price}</h4>
        </div>
    );
};

export default PizzaItem;
