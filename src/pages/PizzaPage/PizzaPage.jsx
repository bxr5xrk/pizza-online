import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPizzaItem } from "../../api/PizzaService";
import PizzaParams from "../../components/PizzaParams/PizzaParams";
import { setSearchValue } from "../../store/slices/filterSlice";
import st from "./PizzaPage.module.scss";

const PizzaPage = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchValue(""));
        fetchPizzaItem(id, setPizza);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (pizza.title) {
        document.title = pizza.title;
    }

    return (
        <main className="main">
            <div className={st.wrapper}>
                <img
                    src={pizza.image}
                    alt={pizza.title}
                    width="500"
                    height="500"
                />

                <div className={st.content}>
                    <h2 className={st.title}>{pizza.title}</h2>

                    {pizza.sizes && pizza.edges && (
                        <PizzaParams
                            sizes={pizza.sizes}
                            edges={pizza.edges}
                            id={id}
                            title={pizza.title}
                            image={pizza.image}
                        />
                    )}
                    <Link className={st.button} to="/pizzas/p=1">
                        {`< На головну`}
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default PizzaPage;
