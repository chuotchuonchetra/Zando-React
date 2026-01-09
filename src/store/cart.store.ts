import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../types/product.type";
import type { RootState } from "./store";
interface Cart {
  products: Product[];
}
const initialState: Cart = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product: Product = action.payload;
      state.products.push(product);
    },
    removeFromCart: (state, action) => {
      const productId: string | number = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});
export const selectCartItems = (state: RootState) => state.cart.products;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
