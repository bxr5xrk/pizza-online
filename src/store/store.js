import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./slices/pizzaSlice";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import searchSlice from "./slices/searchSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        pizzaSlice,
        filterSlice,
        cartSlice,
        searchSlice,
        authSlice,
    },
});
