import React from "react";
import Pagination from "../components/Pagination/Pagination";
import PizzaList from "../components/PizzaList";
import SortingTypes from "../components/SortingTypes/SortingTypes";

const PizzasPage = () => {
    return (
        <div className="main">
            <SortingTypes />
            <PizzaList />
            <Pagination />
        </div>
    );
};

export default PizzasPage;
