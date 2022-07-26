import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: 0,
    selectedSort: { name: "за популярністю", sortProp: "rating" },
    searchValue: "",
    categories: [
        "Всі",
        "М'ясні",
        "Вегетеріанські",
        "Гриль",
        "Гострі",
        "Закриті",
    ],
    sorting: [
        { name: "за популярністю", sortProp: "rating" },
        { name: "від дорогих до дешевих", sortProp: "price" },
        { name: "від дешевих до дорогих", sortProp: "-price" },
        { name: "за алфавітом", sortProp: "title" },
    ],
    page: 1,
    limitItems: 6,
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategory(state, action) {
            state.selectedCategory = action.payload;
        },
        setSort(state, action) {
            state.selectedSort = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
    },
});

export const selectFilter = (state) => state.filterSlice;

export const { setSearchValue, setCategory, setSort, setPage } =
    filterSlice.actions;

export default filterSlice.reducer;
