import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../store/slices/filterSlice";
import { setPage } from "../../store/slices/pizzaSlice";

const PizzaCategories = () => {
    const { selectedCategory, categories } = useSelector(
        (state) => state.filterSlice
    );
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const onClickCategory = (id) => dispatch(setCategory(id));

    const onChangeValue = (i) => {
        onClickCategory(i);
        dispatch(setPage(1));
        navigate(`../pizzas/p=1`);
    };

    return (
        <>
            <ul>
                {categories.map((category, i) => (
                    <li
                        onClick={() => onChangeValue(i)}
                        className={selectedCategory === i ? "active" : ""}
                        key={i}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default PizzaCategories;
