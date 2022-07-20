import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizza } from "../api/PizzaService";
import PizzaItem from "./PizzaItem/PizzaItem";

const PizzaList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizza());

        document.title = "Pizza";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { pizza, status } = useSelector((state) => state.pizzaSlice);

    return (
        <div>
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
