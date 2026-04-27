import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slices/Product.slice";

export const store = configureStore({
  reducer: {
    Product: ProductReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
