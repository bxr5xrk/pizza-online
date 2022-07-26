import React from "react";
import Pagination from "../components/Pagination/Pagination";
import PizzaList from "../components/PizzaList";
import SortingTypes from "../components/SortingTypes/SortingTypes";

const PizzasPage = () => {
    return (
        <section className="main">
            <SortingTypes />
            <PizzaList />
            <Pagination />
        </section>
    );
};

export default PizzasPage;
