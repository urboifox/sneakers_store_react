import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  favourites: {},
};

const dataSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setMainData: (state, action) => {
      state.data = action.payload;
    },
    initiateFavourites: (state, action) => {
      state.favourites = action.payload;
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    toggleFavouriteItem: (state, action) => {
      let id = action.payload;
      state.favourites[id]
        ? delete state.favourites[id]
        : (state.favourites[id] = true);
      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
  },
});

export const { setMainData, toggleFavouriteItem, initiateFavourites } =
  dataSlice.actions;
export default dataSlice;
