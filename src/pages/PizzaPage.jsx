import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPizzaItem } from "../api/PizzaService";

const PizzaPage = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState({});

    useEffect(() => {
        fetchPizzaItem(id, setPizza);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h2>{pizza.title}</h2>
            <h4>{pizza.price}</h4>
            <Link to='/pizza'>all pizza</Link>
        </div>
    );
};

export default PizzaPage;
