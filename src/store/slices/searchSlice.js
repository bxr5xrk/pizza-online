import { createSlice } from "@reduxjs/toolkit";
import { searchPizza } from "../../api/PizzaService";

const initialState = {
    suitablePizza: [],
    searchValue: "",
    status: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setSuitablePizza(state, action) {
            state.suitablePizza = action.payload;
        },
    },
    extraReducers: {
        [searchPizza.pending]: (state) => {
            state.status = "loading";
            state.suitablePizza = [];
        },
        [searchPizza.fulfilled]: (state, action) => {
            state.status = "success";
            state.searchValue.length === 0
                ? (state.suitablePizza = [])
                : (state.suitablePizza = action.payload);
        },
        [searchPizza.rejected]: (state) => {
            state.status = "failed";
            state.suitablePizza = [];
        },
    },
});

export const selectSearch = (state) => state.searchSlice;

export const { setSearchValue, setSuitablePizza } = searchSlice.actions;

export default searchSlice.reducer;
