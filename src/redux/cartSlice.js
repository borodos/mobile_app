import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },

  reducers: {
    addProduct(state, action) {
      state.cart.push(action.payload);
    },
    removeProduct(state, action) {
      state.cart = state.cart.filter((value) => value.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, removeProduct } = cartSlice.actions;
