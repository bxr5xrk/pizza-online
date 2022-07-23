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
        // onChangePage(state, action) {
        //     state.page = action.payload;
        // },
        // onChangeSearchValue(state, action) {
        //     state.searchValue = action.payload;
        // },
        // setSearch(state, action) {
        //     state.page = Number(action.payload.page);
        //     state.sortType = action.payload.sortType;
        //     state.categoryId = Number(action.payload.categoryId);
        // },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
    },
});

export const selectFilter = (state) => state.filterSlice;

export const {
    // setCategoryId,
    // setSortType,
    // onChangePage,
    // onChangeSearchValue,
    // setSearch,
    setSearchValue,
    setCategory,
    setSort,
} = filterSlice.actions;

export default filterSlice.reducer;
