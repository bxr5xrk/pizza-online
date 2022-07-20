import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    pizza: [],
    status: "",
};

export const fetchPizzaItems = createAsyncThunk(
    "pizza/fetchPizzaStatus",

    async () => {
        const { data } = await axios.get(
            "https://62a1db14cd2e8da9b0fca398.mockapi.io/pizza?"
        );
        return data;
    }
);

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setPizza(state, action) {
            state.pizza = action.payload;
        },
    },
    extraReducers: {
        [fetchPizzaItems.pending]: (state) => {
            state.status = "loading";
            state.pizza = [];
        },
        [fetchPizzaItems.fulfilled]: (state, action) => {
            state.pizza = action.payload;
            state.status = "success";
        },
        [fetchPizzaItems.rejected]: (state) => {
            state.status = "failed";
            state.pizza = [];
        },
    },
});

export const { setPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
