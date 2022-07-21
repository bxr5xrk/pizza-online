import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://62a1db14cd2e8da9b0fca398.mockapi.io/pizza";

export const fetchPizza = createAsyncThunk(
    "pizza/fetchPizzaStatus",

    async (p) => {
        const { data } = await axios.get(API_URL + `?page=${p}&limit=3`);
        return data;
    }
);

export const getTotalPizzaCount = async (setData) => {
    const { data } = await axios.get(API_URL);
    return setData(data.length);
};

export const fetchPizzaItem = async (id, setData) => {
    const { data } = await axios.get(API_URL + `/${id}`);
    return setData(data);
};
