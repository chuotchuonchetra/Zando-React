import { createSlice } from "@reduxjs/toolkit";
import { data } from "../assets/data/products";

//product.store.ts using redux-toolkit and redux-react

const initialState = {
  collections: data,
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
export default productSlice.reducer;
