import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../store/slices/filterSlice";

const PizzaCategories = () => {
    const { selectedCategory, categories } = useSelector(
        (state) => state.filterSlice
    );

    const dispatch = useDispatch();
    const onClickCategory = (id) => dispatch(setCategory(id));

    // const setPage = (page) => dispatch(setPage(page));

    const onChangeValue = (i) => {
        onClickCategory(i);
        // setPage(1);
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
