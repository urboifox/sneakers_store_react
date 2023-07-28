import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import dataSlice from "./slices/dataSlice";
import documentSlice from "./slices/documentSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    items: dataSlice.reducer,
    document: documentSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
