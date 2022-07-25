import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_URL = "https://62a1db14cd2e8da9b0fca398.mockapi.io/pizza";
const API_URL = "https://62d8222f9c8b5185c783bcb2.mockapi.io/pizza";

export const fetchPizza = createAsyncThunk(
    "pizza/fetchPizzaStatus",

    async ({ pageParams, selectedCategory, sortBy }) => {
        const category =
            selectedCategory === 0 ? "" : `&category=${selectedCategory}`;
        const sort = sortBy.replace("-", "");
        const sortOrder = sortBy.includes("-") ? "asc" : "desc";

        const { data } = await axios.get(
            API_URL +
                `?page=${pageParams}&limit=3${category}&sortby=${sort}&order=${sortOrder}`
        );
        return data;
    }
);

export const searchPizza = async (delayedSearchValue, setData) => {
    const search = delayedSearchValue ? `?search=${delayedSearchValue}` : "";

    const { data } = await axios.get(API_URL + `${search}`);
    return setData(data);
};

export const getTotalPizzaCount = async (setData, selectedCategory) => {
    const category =
        Number(selectedCategory) === 0 ? "" : `?category=${selectedCategory}`;

    const { data } = await axios.get(API_URL + category);
    return setData(data.length);
};

export const fetchPizzaItem = async (id, setData) => {
    const { data } = await axios.get(API_URL + `/${id}`);
    return setData(data);
};
