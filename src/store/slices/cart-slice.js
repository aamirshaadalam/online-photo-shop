import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      debugger;
      state.items.push(payload);
    },
    removeitemFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    updateCartItem: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload.id);
      state.items = state.items.splice(index, 1, payload);
    },
  },
});

// Actions
export const { addItemToCart, removeitemFromCart, updateCartItem } = cartSlice.actions;

// Selectors
export const getCartItems = (state) => state.cart.items;

// Reducer
export default cartSlice.reducer;
