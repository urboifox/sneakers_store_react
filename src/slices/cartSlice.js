import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: {},
};

const notify = (message) =>
  toast(message, {
    position: "bottom-right",
    progressStyle: { background: "hsl(26, 100%, 55%)" },
  });
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
        console.log(1);
        notify("Removed From Cart!");
      } else {
        state.items[action.payload] = 1;
        notify("Added To Cart!");
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
      state.items[action.payload] === 1
        ? delete state.items[action.payload]
        : (state.items[action.payload] -= 1);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    addToCart: (state, action) => {
      state.items[action.payload.id] = action.payload.value;
      notify("Added To Cart!");
      localStorage.setItem("cartItems", JSON.stringify(state.items));
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
