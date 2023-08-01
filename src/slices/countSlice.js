import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    incrementCount: (state, action) => {
      state.items[action.payload] = state.items[action.payload]
        ? (state.items[action.payload] += 1)
        : 2;
    },
    decrementCount: (state, action) => {
      state.items[action.payload] -= 1;
    },
  },
});

export const { incrementCount, decrementCount } = countSlice.actions;
export default countSlice;
