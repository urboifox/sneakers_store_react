import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  current: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    togglePopup: (state, action) => {
      state.visible = !state.visible;
      state.current === null
        ? (state.current = action.payload)
        : (state.current = null);
    },
  },
});

export const { togglePopup } = popupSlice.actions;
export default popupSlice;
