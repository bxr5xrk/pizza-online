import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizza } from "../api/PizzaService";
import PizzaItem from "./PizzaItem/PizzaItem";
import Pagination from "./Pagination/Pagination";
import { useParams } from "react-router-dom";

const PizzaList = () => {
    const dispatch = useDispatch();
    const { selectedCategory } = useSelector((state) => state.filterSlice);

    const { pageParams } = useParams();

    useEffect(() => {
        dispatch(fetchPizza({ pageParams, selectedCategory }));

        document.title = "Pizza";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageParams, selectedCategory]);

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
