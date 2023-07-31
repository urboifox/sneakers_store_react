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
        state.items[action.payload] = 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    incrementCartItem: (state, action) => {
      state.items[action.payload] = state.items[action.payload]
        ? (state.items[action.payload] += 1)
        : 2;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    decrementCartItem: (state, action) => {
      state.items[action.payload] -= 1;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    addToCart: (state, action) => {
      state.items[action.payload.id] = action.payload.value;
    },
  },
});

export const {
  initiateCart,
  toggleCartItem,
  incrementCartItem,
  decrementCartItem,
  addToCart,
} = cartSlice.actions;
export default cartSlice;
