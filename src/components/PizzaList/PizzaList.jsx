import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizza } from "../../api/PizzaService";
import PizzaItem from "../PizzaItem/PizzaItem";
import { useParams } from "react-router-dom";
import { selectFilter } from "../../store/slices/filterSlice";
import { selectPizza } from "../../store/slices/pizzaSlice";
import st from "./PizzaList.module.scss";
import PizzaSkeleton from "../PizzaSkeleton";

const PizzaList = () => {
    const dispatch = useDispatch();
    const { selectedSort, selectedCategory, limitItems } =
        useSelector(selectFilter);
    const { pizza, status } = useSelector(selectPizza);
    const { pageParams } = useParams();

    useEffect(() => {
        const sortBy = selectedSort.sortProp;
        dispatch(
            fetchPizza({ pageParams, selectedCategory, sortBy, limitItems })
        );

        document.title = "Піца";
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageParams, selectedCategory, selectedSort]);

    if (status === "failed") {
        return <p>error</p>;
    }

    return (
        <>
            <h1 className={st.title}>Піца</h1>
            <div className={st.wrapper}>
                {status === "loading"
                    ? [...new Array(3)].map((_, key) => (
                          <PizzaSkeleton key={key} />
                      ))
                    : pizza.map((item) => (
                          <PizzaItem
                              image={item.image}
                              id={item.id}
                              title={item.title}
                              key={item.id}
                              edges={item.edges}
                              sizes={item.sizes}
                          />
                      ))}
            </div>
        </>
    );
};

export default PizzaList;
