import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loaded: false,
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    setLoaded: (state) => {
      state.loaded = true;
    },
  },
});

export const { setLoaded } = documentSlice.actions;
export default documentSlice;
