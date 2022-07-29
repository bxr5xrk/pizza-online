import { createSlice } from "@reduxjs/toolkit";

const getItemsFromLS = () => {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
};

const getPriceFromLS = () => {
    const data = localStorage.getItem("cartPrice");
    return data ? JSON.parse(data) : 0;
};

const initialState = {
    cartItems: getItemsFromLS(),
    totalPrice: getPriceFromLS(),
};

const findPizza = (state, action) =>
    state.cartItems.find(
        (i) =>
            i.id === action.payload.id &&
            i.size === action.payload.size &&
            i.edge === action.payload.edge
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
        // add to cart
        addPizzaToCart(state, action) {
            const pizza = findPizza(state, action);

            pizza
                ? pizza.count++
                : state.cartItems.push({ ...action.payload, count: 1 });

            calculatePrice(state);
        },
        // remove from cart
        removePizzaFromCart(state, action) {
            const pizza = findPizza(state, action);

            state.cartItems = state.cartItems.filter((i) => i !== pizza);

            calculatePrice(state);
        },

        cartItemDecrement(state, action) {
            const pizza = findPizza(state, action);

            pizza.count > 1
                ? pizza.count--
                : cartSlice.caseReducers.removePizzaFromCart(state, action);

            calculatePrice(state);
        },
        clearCart(state) {
            state.cartItems = [];
            state.totalPrice = 0;
        },
    },
});

export const selectCart = (state) => state.cartSlice;

export const {
    addPizzaToCart,
    cartItemDecrement,
    removePizzaFromCart,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
