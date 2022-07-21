import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./slices/pizzaSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        pizzaSlice,
        filterSlice,
    },
});
