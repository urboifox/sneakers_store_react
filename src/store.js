import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import dataSlice from "./slices/dataSlice";
import documentSlice from "./slices/documentSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    items: dataSlice.reducer,
    document: documentSlice.reducer,
  },
});

export default store;
