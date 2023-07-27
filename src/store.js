import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import dataSlice from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    items: dataSlice.reducer,
  },
});

export default store;
