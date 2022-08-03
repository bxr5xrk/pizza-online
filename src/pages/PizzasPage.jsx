import React from "react";
import Pagination from "../components/Pagination/Pagination";
import PizzaList from "../components/PizzaList/PizzaList";
import SortingTypes from "../components/SortingTypes/SortingTypes";

const PizzasPage = () => {
    return (
        <>
            <SortingTypes />
            <PizzaList />
            <Pagination />
        </>
    );
};

export default PizzasPage;
