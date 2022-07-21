import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizza } from "../api/PizzaService";
import PizzaItem from "./PizzaItem/PizzaItem";
import Pagination from "./Pagination/Pagination";

const PizzaList = () => {
    const dispatch = useDispatch();

    const { page } = useSelector((state) => state.pizzaSlice);

    useEffect(() => {
        dispatch(fetchPizza(page));
        document.title = "Pizza";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const { pizza, status } = useSelector((state) => state.pizzaSlice);

    return (
        <div>
            <Pagination />
            {status === "loading" ? (
                <p>loading</p>
            ) : (
                <>
                    {pizza.map((item) => (
                        <PizzaItem
                            imageUrl={item.image}
                            id={item.id}
                            title={item.title}
                            key={item.id}
                            price={item.price}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default PizzaList;
