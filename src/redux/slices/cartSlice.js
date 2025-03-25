import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    removeFromCart: (state, action) => {
      return state.filter((item) => item._id !== action.payload._id);
    },
    addToCart: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
    },
    clearCart: (state, action) => {
      return [];
    },
    updateQuantity: (state, action) => {
      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.push({ ...action.payload, quantity: 1 });
      }
      if (action.payload.quantity < 0) {
        action.payload.quantity = 0;
      }
      const item = state.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    updateColor: (state, action) => {
      const item = state.find((item) => item._id === action.payload._id);

      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.push({ ...action.payload, quantity: 1 });
      }

      if (item) {
        item.color = action.payload.color;
      }
    },
    updateSize: (state, action) => {
      const item = state.find((item) => item._id === action.payload._id);

      const existingItem = state.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.push({ ...action.payload, quantity: 1 });
      }

      if (item) {
        item.size = action.payload.size;
      }
    },
  },
});

export const {
  removeFromCart,
  addToCart,
  clearCart,
  updateQuantity,
  updateColor,
  updateSize,
} = cartSlice.actions;
export default cartSlice.reducer;
