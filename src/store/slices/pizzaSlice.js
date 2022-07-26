import { createSlice } from "@reduxjs/toolkit";
import { fetchPizza } from "../../api/PizzaService";

const initialState = {
    pizza: [],
    status: "",
};

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setPizza(state, action) {
            state.pizza = action.payload;
        },
    },
    extraReducers: {
        [fetchPizza.pending]: (state) => {
            state.status = "loading";
            state.pizza = [];
        },
        [fetchPizza.fulfilled]: (state, action) => {
            state.pizza = action.payload;
            state.status = "success";
        },
        [fetchPizza.rejected]: (state) => {
            state.status = "failed";
            state.pizza = [];
        },
    },
});

export const selectPizza = (state) => state.pizzaSlice;

export const { setPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
