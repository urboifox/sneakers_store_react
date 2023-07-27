import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setIsLoading } = documentSlice.actions;
export default documentSlice;
