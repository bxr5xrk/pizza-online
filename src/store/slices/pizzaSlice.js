import { createSlice } from "@reduxjs/toolkit";
import { fetchPizza } from "../../api/PizzaService";

const initialState = {
    pizza: [],
    status: "",
    page: 1,
    limitItems: 3,
};

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setPizza(state, action) {
            state.pizza = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
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

export const { setPizza, setPage } = pizzaSlice.actions;

export default pizzaSlice.reducer;
