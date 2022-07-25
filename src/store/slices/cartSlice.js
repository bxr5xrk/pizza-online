import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalPrice: 0,
};
const findPizza = (state, action) =>
    state.cartItems.find(
        (i) =>
            i.id === action.payload.id &&
            i.size === action.payload.size &&
            i.pizzaType === action.payload.pizzaType
    );

const calculatePrice = (state) => {
    state.totalPrice = state.cartItems.reduce(
        (total, i) => total + i.price * i.count,
        0
    );
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPizzaToCart(state, action) {
            const pizza = findPizza(state, action);

            pizza ? pizza.count++ : state.cartItems.push({ ...action.payload });

            calculatePrice(state);
        },
    },
});

export const { addPizzaToCart } = cartSlice.actions;

export default cartSlice.reducer;
