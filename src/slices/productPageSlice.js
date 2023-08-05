import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: 0,
  prev: 0,
};

const productPageSlice = createSlice({
  name: "productPage",
  initialState,
  reducers: {
    changeActiveImage: (state, action) => {
      state.prev = state.active;
      state.active = action.payload;
    },
    showNextImage: (state) => {
      state.prev = state.active;
      state.active = state.active === 3 ? 0 : (state.active += 1);
    },
    showPrevImage: (state) => {
      state.prev = state.active;
      state.active = state.active === 0 ? 3 : (state.active -= 1);
    },
  },
});

export const { changeActiveImage, showNextImage, showPrevImage } =
  productPageSlice.actions;
export default productPageSlice;
