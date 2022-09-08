import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      state.items.push(payload);
    },
    removeItemFromCart: (state, { payload }) => {
      debugger;
      state.items = state.items.filter((item) => !(item.id === payload.id && item.size === payload.size));
    },
    updateCartItem: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload.id && item.size === payload.size);
      state.items.splice(index, 1, payload);
    },
  },
});

// Actions
export const { addItemToCart, removeItemFromCart, updateCartItem } = cartSlice.actions;

// Selectors
export const getCartItems = (state) => state.cart.items;

// Reducer
export default cartSlice.reducer;
