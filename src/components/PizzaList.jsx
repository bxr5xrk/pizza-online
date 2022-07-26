import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizza } from "../api/PizzaService";
import PizzaItem from "./PizzaItem/PizzaItem";
import { useParams } from "react-router-dom";
import { selectFilter } from "../store/slices/filterSlice";
import { selectPizza } from "../store/slices/pizzaSlice";

const PizzaList = () => {
    const dispatch = useDispatch();
    const { selectedSort, selectedCategory } = useSelector(selectFilter);
    const { pageParams } = useParams();

    useEffect(() => {
        const sortBy = selectedSort.sortProp;
        dispatch(fetchPizza({ pageParams, selectedCategory, sortBy }));

        document.title = "Pizza";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageParams, selectedCategory, selectedSort]);

    const { pizza, status } = useSelector(selectPizza);

    if (status === "failed") {
        return <>error</>;
    }

    return (
        <div>
            {status === "loading" ? (
                <p>loading</p>
            ) : (
                <>
                    {pizza.map((item) => (
                        <PizzaItem
                            image={item.image}
                            id={item.id}
                            title={item.title}
                            key={item.id}
                            edges={item.edges}
                            sizes={item.sizes}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default PizzaList;
