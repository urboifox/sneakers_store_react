import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  scrolled: false,
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = false;
    },
    setScrolled: (state, action) => {
      state.scrolled = action.payload;
    },
  },
});

export const { setIsLoading, setScrolled } = documentSlice.actions;
export default documentSlice;
