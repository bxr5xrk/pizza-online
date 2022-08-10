import React from "react";
import PizzaList from "../../components/PizzaList/PizzaList";
import SortingTypes from "../../components/SortingTypes/SortingTypes";
import Pagination from "../../components/UI/Pagination/Pagination";

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
