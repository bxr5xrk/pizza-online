import { createSlice } from "@reduxjs/toolkit";

const getDataFromLS = () => {
    const data = localStorage.getItem("isAuth");
    return data ? JSON.parse(data) : false;
};

const initialState = {
    isAuth: getDataFromLS(),
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload;
        },
    },
});

export const selectAuth = (state) => state.authSlice

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
