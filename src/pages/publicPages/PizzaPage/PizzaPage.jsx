import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPizzaItem } from "../../../api/PizzaService";
import PizzaParams from "../../../components/PizzaParams/PizzaParams";
import Button from "../../../components/UI/Button/Button";
import { setSearchValue } from "../../../store/slices/filterSlice";
import { selectPizza } from "../../../store/slices/pizzaSlice";
import st from "./PizzaPage.module.scss";

const PizzaPage = () => {
    const { id } = useParams();
    const [pizzaItem, setPizzaItem] = useState({});
    const { pizza } = useSelector(selectPizza);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchValue(""));

        const findPizza = (id) => pizza.find((i) => i.id === id);

        pizza.length === 0
            ? fetchPizzaItem(id, setPizzaItem)
            : findPizza(id)
            ? setPizzaItem(pizza.find((i) => i.id === id))
            : fetchPizzaItem(id, setPizzaItem);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (pizzaItem.title) {
        document.title = pizzaItem.title;
    }

    return (
        <div className={st.wrapper}>
            <img
                src={pizzaItem.image}
                alt={pizzaItem.title}
                width="500"
                height="500"
            />

            <div className={st.content}>
                <h2 className={st.title}>{pizzaItem.title}</h2>

                {pizzaItem.sizes && pizzaItem.edges && (
                    <PizzaParams
                        sizes={pizzaItem.sizes}
                        edges={pizzaItem.edges}
                        id={id}
                        title={pizzaItem.title}
                        image={pizzaItem.image}
                    />
                )}
                <Link className={st.button} to="/pizzas/p=1">
                    <Button appearance="ghost">{`< На головну`}</Button>
                </Link>
            </div>
        </div>
    );
};

export default PizzaPage;
