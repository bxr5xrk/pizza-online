import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
    "pizza/fetchPizzaStatus",

    async () => {
        const { data } = await axios.get(
            "https://62a1db14cd2e8da9b0fca398.mockapi.io/pizza"
        );
        return data;
    }
);

export const fetchPizzaItem = async (id, setData) => {
    const { data } = await axios.get(
        `https://62a1db14cd2e8da9b0fca398.mockapi.io/pizza/${id}`
    );
    return setData(data);
};
