import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import pcBuilderSlice from "./features/pcBuilder/pcBuilderSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    pcBuilder: pcBuilderSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
