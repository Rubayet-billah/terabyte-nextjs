import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
