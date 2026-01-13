import { createSlice } from "@reduxjs/toolkit";
import type { ICartItem } from "../types/product.type";
import type { RootState } from "./store";
interface Cart {
  products: ICartItem[];
}
const initialState: Cart = {
  products: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => item.cartItemId === action.payload.cartItemId
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
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
