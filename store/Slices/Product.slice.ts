import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  Product: {
    name: string;
    description: string;
    sku: string;
    category: string;
    price: number;
    stock: number;
    expiry: string;
    status: string;
  }[];
}

const initialState: ProductState = {
  Product: [],
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    AddProduct: (state, action) => {
      state.Product.push(action.payload);
    },
  },
});

export const { AddProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
