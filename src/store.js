import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import dataSlice from "./slices/dataSlice";
import documentSlice from "./slices/documentSlice";
import cartSlice from "./slices/cartSlice";
import productPageSlice from "./slices/productPageSlice";
import countSlice from "./slices/countSlice";
import popupSlice from "./slices/popupSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    items: dataSlice.reducer,
    document: documentSlice.reducer,
    cart: cartSlice.reducer,
    product: productPageSlice.reducer,
    count: countSlice.reducer,
    popup: popupSlice.reducer,
  },
});

export default store;
