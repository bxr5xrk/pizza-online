import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizza } from "../api/PizzaService";
import { fetchPizzaItems, setPizza } from "../store/slices/pizzaSlice";

const PizzaList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzaItems());
    }, []);

    const { pizza, status } = useSelector((state) => state.pizzaSlice);

    return (
        <div>
            {status === "loading" ? (
                <p>loading</p>
            ) : (
                <>
                    <button onClick={() => getPizza(setPizza)}>click</button>
                    {pizza.map((i) => (
                        <p key={i.id}>{i.title}</p>
                    ))}
                </>
            )}
        </div>
    );
};

export default PizzaList;
