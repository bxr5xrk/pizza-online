import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    selectFilter,
    setCategory,
    setPage,
} from "../../store/slices/filterSlice";
import st from "./PizzaCategories.module.scss";

const PizzaCategories = () => {
    const { selectedCategory, categories } = useSelector(selectFilter);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickCategory = (id) => dispatch(setCategory(id));
    const onChangeValue = (i) => {
        onClickCategory(i);
        dispatch(setPage(1));
        navigate(`../pizzas/p=1`);
    };

    return (
        <nav className={st.categories}>
            <ul>
                {categories.map((category, i) => (
                    <li
                        onClick={() => onChangeValue(i)}
                        className={selectedCategory === i ? `${st.active}` : ""}
                        key={i}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PizzaCategories;
