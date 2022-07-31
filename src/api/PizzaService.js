import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_PIZZA = "https://62d8222f9c8b5185c783bcb2.mockapi.io/pizza";
const API_ORDERS = "https://62d8222f9c8b5185c783bcb2.mockapi.io/orders";

export const fetchPizza = createAsyncThunk(
    "pizza/fetchPizzaStatus",

    async ({ pageParams, selectedCategory, sortBy, limitItems }) => {
        const category =
            selectedCategory === 0 ? "" : `&category=${selectedCategory}`;
        const sort = sortBy.replace("-", "");
        const sortOrder = sortBy.includes("-") ? "asc" : "desc";

        const { data } = await axios.get(
            API_PIZZA +
                `?page=${pageParams}&limit=${limitItems}${category}&sortby=${sort}&order=${sortOrder}`
        );
        return data;
    }
);

export const getTotalPizzaCount = async (setData, selectedCategory) => {
    const category =
        Number(selectedCategory) === 0 ? "" : `?category=${selectedCategory}`;

    const { data } = await axios.get(API_PIZZA + category);
    return setData(data.length);
};

export const fetchPizzaItem = async (id, setData) => {
    const { data } = await axios.get(API_PIZZA + `/${id}`);
    return setData(data);
};

export const searchPizza = createAsyncThunk(
    "filter/fetchSearchStatus",

    async ({ delayedSearchValue }) => {
        const { data } = await axios.get(
            API_PIZZA + `?search=${delayedSearchValue}`
        );
        return data;
    }
);

export const postCartItems = async (data) => {
    await axios
        .post(API_ORDERS, {
            ...data,
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const getOrderItems = async (setData) => {
    const { data } = await axios.get(API_ORDERS);

    return setData(data);
};

export const removeOrderItem = async (id) => {
    await axios.delete(API_ORDERS + `/${id}`);
};
