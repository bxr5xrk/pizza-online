import React from "react";
import PizzaCategories from "../PizzaCategories/PizzaCategories";
import PizzaSearch from "../PizzaSearch/PizzaSearch";
import PizzaSort from "../PizzaSort/PizzaSort";

const SortingTypes = () => {
    return (
        <div>
            <PizzaSearch />
            <PizzaCategories />
            <PizzaSort />
        </div>
    );
};

export default SortingTypes;
