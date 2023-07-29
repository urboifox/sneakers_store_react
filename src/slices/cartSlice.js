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
      if (state.items[action.payload]) {
        delete state.items[action.payload];
      } else {
        state.items[action.payload] = true;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});

export const { initiateCart, toggleCartItem } = cartSlice.actions;
export default cartSlice;
