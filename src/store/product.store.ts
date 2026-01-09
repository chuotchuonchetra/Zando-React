import { createSlice, createSelector } from "@reduxjs/toolkit";
import { data } from "../assets/data/products";
import type { Collection } from "../types/product.type";
import type { RootState } from "./store"; // Ensure this points to your central store file

interface ProductState {
  collections: Collection[];
}

const initialState: ProductState = {
  collections: data.collections,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // If you ever need to update products (e.g., from an API), add reducers here
  },
});

// --- SELECTORS ---

// 1. Base selector to get collections
const selectCollections = (state: RootState) => state.products.collections;

// 2. Memoized selector to find a product by ID
// This is efficient because it won't re-calculate unless 'collections' changes
export const selectProductById = createSelector(
  [
    selectCollections,
    (_state: RootState, productId: string | number) => productId,
  ],
  (collections, productId) => {
    for (const collection of collections) {
      const product = collection.products.find((p) => p.id === productId);
      if (product) return product;
    }
    return null;
  }
);

export default productSlice.reducer;
