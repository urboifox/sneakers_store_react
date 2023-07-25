import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isVisible: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initState,
  reducers: {
    toggleVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleVisible } = menuSlice.actions;
export default menuSlice;
