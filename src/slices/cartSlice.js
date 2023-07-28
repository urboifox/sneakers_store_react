import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initiateCart: (state, action) => {
      state.items = action.payload;
    },
    toggleCartItem: (state, action) => {
      state.items[action.payload] = !state.items[action.payload];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { initiateCart, toggleCartItem } = cartSlice.actions;
export default cartSlice;
